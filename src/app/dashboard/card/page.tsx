"use client";

import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { MemberCard } from "@/components/membership/MemberCard";
import { Pill } from "@/components/ui/Pill";
import { FadeIn } from "@/components/motion/FadeIn";
import { useCurrentMember } from "@/lib/hooks/useCurrentMember";
import { CHAPTERS } from "@/types";

function formatSince(date: string | null) {
  if (!date) return "—";
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export default function MemberCardPage() {
  const { member } = useCurrentMember();

  const statusVariant =
    member?.status === "active"
      ? "pink"
      : member?.status === "pending"
        ? "muted"
        : "outline";

  const details = [
    { label: "Member Name", value: member?.name ?? "—" },
    { label: "Member Number", value: member?.cardNumber ?? "Pending activation" },
    {
      label: "Chapter",
      value: member ? CHAPTERS[member.chapter].fullName : "—",
    },
    { label: "Since", value: formatSince(member?.joinedAt ?? null) },
  ];

  return (
    <DashboardShell title="Your Member Pass">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <FadeIn onView={false} className="max-w-md w-full">
          <MemberCard
            name={member?.name}
            cardNumber={member?.cardNumber ?? undefined}
            chapter={member?.chapter}
          />
          <p className="font-body text-sm text-white/50 mt-6">
            Your access pass lives right here — it unlocks events, perks, and
            concierge across all three chapters. Prefer a physical card? You can
            request one anytime.
          </p>
        </FadeIn>

        <FadeIn onView={false} delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="font-headline text-2xl">Pass Details</h2>
            {member && (
              <Pill variant={statusVariant} className="capitalize">
                {member.status}
              </Pill>
            )}
          </div>
          <dl className="divide-y divide-border border-y border-border">
            {details.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between py-4"
              >
                <dt className="font-caps text-xs text-white/40">{row.label}</dt>
                <dd className="font-body text-sm text-white text-right">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </DashboardShell>
  );
}
