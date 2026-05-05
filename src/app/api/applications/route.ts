import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const applicationSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  chapter: z.enum(["miami", "la", "nyc"]),
  instagram: z.string().optional(),
  referral: z.string().optional(),
  why: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = applicationSchema.parse(body);

    // TODO: Connect to Supabase when configured
    // For now, just log and return success
    console.log("Application received:", data);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      application: { id: crypto.randomUUID(), ...data, status: "pending" },
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid application data", details: error.issues },
        { status: 400 }
      );
    }

    console.error("Application error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
