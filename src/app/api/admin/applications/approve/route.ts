import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

/**
 * Approve an application → create the member account.
 *
 * Flow:
 *  1. Verify the caller is a signed-in admin (is_admin).
 *  2. Create a Supabase Auth user for the applicant.
 *  3. Create the `members` row (pending → active so the DB trigger assigns the
 *     metal-card number + joined_at).
 *  4. Mark the application approved (reviewed_by = admin).
 *
 * INTERMEDIATE SOLUTION: the new member has no password yet. They sign in via
 * the existing "Forgot Password" flow to set one.
 * TODO (production): send a proper branded invite/set-password email here —
 * e.g. admin.auth.admin.inviteUserByEmail(email) or generateLink({type:"invite"}).
 * That requires SMTP configured in the Supabase project.
 */
export async function POST(req: Request) {
  let applicationId: string | undefined;
  try {
    ({ applicationId } = await req.json());
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
  if (!applicationId) {
    return NextResponse.json({ error: "Missing applicationId" }, { status: 400 });
  }

  // 1. Auth — caller must be an admin.
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }
  const { data: me } = await supabase
    .from("members")
    .select("is_admin")
    .eq("id", user.id)
    .single();
  if (!me?.is_admin) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const admin = createAdminClient();

  // Fetch the application.
  const { data: app, error: appErr } = await admin
    .from("applications")
    .select("id, name, email, phone, chapter, instagram, status")
    .eq("id", applicationId)
    .single();
  if (appErr || !app) {
    return NextResponse.json({ error: "Application not found" }, { status: 404 });
  }
  if (app.status === "approved") {
    return NextResponse.json({ ok: true, alreadyApproved: true });
  }

  // 2. Create the auth user.
  const { data: created, error: createErr } =
    await admin.auth.admin.createUser({
      email: app.email,
      email_confirm: true,
    });
  if (createErr || !created?.user) {
    return NextResponse.json(
      {
        error:
          "Could not create account (the email may already be registered). " +
          (createErr?.message ?? ""),
      },
      { status: 409 }
    );
  }
  const memberId = created.user.id;

  // 3. Create the member row, then activate to trigger card-number generation.
  const { error: insertErr } = await admin.from("members").insert({
    id: memberId,
    email: app.email,
    name: app.name,
    phone: app.phone,
    chapter: app.chapter,
    instagram: app.instagram,
    status: "pending",
  });
  if (insertErr) {
    return NextResponse.json(
      { error: "Could not create member: " + insertErr.message },
      { status: 500 }
    );
  }
  await admin.from("members").update({ status: "active" }).eq("id", memberId);

  // 4. Mark the application approved.
  await admin
    .from("applications")
    .update({ status: "approved", reviewed_by: user.id })
    .eq("id", applicationId);

  return NextResponse.json({ ok: true, memberId });
}
