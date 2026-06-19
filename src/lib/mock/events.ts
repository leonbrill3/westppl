import type { Event } from "@/types";

/**
 * Placeholder events shaped exactly like the `events` table / Event type.
 * Wiring later = replace this import with `supabase.from("events").select()`.
 */
export const events: Event[] = [
  {
    id: "evt-1",
    title: "Rooftop Sunset Social",
    description:
      "An intimate evening of cocktails and connection above the city skyline, with a live DJ set as the sun goes down.",
    date: "2026-07-18T19:00:00-04:00",
    location: "The Standard Rooftop",
    address: "40 Island Ave, Miami Beach, FL",
    chapter: "miami",
    capacity: 80,
    isMembersOnly: true,
    isPublic: false,
    imageUrl:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    category: "party",
    createdBy: "system",
    createdAt: "2026-06-01T00:00:00Z",
  },
  {
    id: "evt-2",
    title: "Members' Supper Club",
    description:
      "A long-table dinner with a guest chef, natural wine pairings, and conversation that runs late.",
    date: "2026-07-25T20:00:00-07:00",
    location: "Private Residence, Hollywood Hills",
    chapter: "la",
    capacity: 24,
    isMembersOnly: true,
    isPublic: false,
    imageUrl:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    category: "dinner",
    createdBy: "system",
    createdAt: "2026-06-02T00:00:00Z",
  },
  {
    id: "evt-3",
    title: "Sunrise Breathwork & Cold Plunge",
    description:
      "Start the day with guided breathwork, a cold plunge, and a slow communal breakfast by the water.",
    date: "2026-08-02T07:00:00-04:00",
    location: "Brooklyn Bridge Park",
    chapter: "nyc",
    capacity: 30,
    isMembersOnly: false,
    isPublic: true,
    imageUrl:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    category: "wellness",
    createdBy: "system",
    createdAt: "2026-06-03T00:00:00Z",
  },
  {
    id: "evt-4",
    title: "Gallery Night: New Voices",
    description:
      "A private after-hours viewing of emerging artists, with the curators on hand and a champagne reception.",
    date: "2026-08-09T18:30:00-04:00",
    location: "Wynwood Arts District",
    chapter: "miami",
    capacity: 120,
    isMembersOnly: true,
    isPublic: false,
    imageUrl:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80",
    category: "art",
    createdBy: "system",
    createdAt: "2026-06-04T00:00:00Z",
  },
];
