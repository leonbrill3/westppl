import { NextRequest, NextResponse } from "next/server";

// Mock events for now - will be replaced with Supabase
const mockEvents = [
  {
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
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const chapter = searchParams.get("chapter");
  const category = searchParams.get("category");

  let events = mockEvents;

  // Filter by chapter
  if (chapter && chapter !== "all") {
    events = events.filter((e) => e.chapter === chapter);
  }

  // Filter by category
  if (category && category !== "all") {
    events = events.filter((e) => e.category === category);
  }

  return NextResponse.json({ events });
}
