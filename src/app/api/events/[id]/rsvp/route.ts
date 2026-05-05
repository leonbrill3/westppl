import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const rsvpSchema = z.object({
  plusOne: z.boolean().optional(),
  plusOneName: z.string().optional(),
});

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: eventId } = await params;

  // TODO: Check authentication when Supabase is configured
  // For now, simulate logged-in user

  try {
    const body = await request.json();
    const { plusOne, plusOneName } = rsvpSchema.parse(body);

    // TODO: Connect to Supabase when configured
    // For now, return mock success response
    console.log("RSVP received for event:", eventId, { plusOne, plusOneName });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    const mockRsvp = {
      id: crypto.randomUUID(),
      eventId,
      memberId: "mock-user-id",
      status: "confirmed",
      plusOne: plusOne || false,
      plusOneName: plusOneName || null,
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      rsvp: mockRsvp,
      message: "You're in! See you there.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid RSVP data", details: error.issues },
        { status: 400 }
      );
    }

    console.error("RSVP error:", error);
    return NextResponse.json(
      { error: "Failed to create RSVP" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: eventId } = await params;

  // TODO: Check authentication when Supabase is configured

  console.log("RSVP cancelled for event:", eventId);

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  return NextResponse.json({
    success: true,
    message: "Your RSVP has been cancelled",
  });
}
