import { NextRequest, NextResponse } from "next/server";

// Mock event for now
const mockEvent = {
  id: "1",
  title: "Sunset Rooftop Session",
  description: "Join us for an exclusive sunset gathering.",
  date: "2025-05-15T18:00:00",
  location: "The Setai",
  chapter: "miami",
  capacity: 50,
  isMembersOnly: true,
  isPublic: false,
  category: "party",
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // TODO: Fetch from Supabase when configured
  if (id !== "1") {
    return NextResponse.json(
      { error: "Event not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    event: mockEvent,
    rsvpCount: 24,
    spotsRemaining: 26,
    userRsvp: null,
  });
}
