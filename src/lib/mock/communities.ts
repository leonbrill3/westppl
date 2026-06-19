import type { Community } from "@/types";

/** Placeholder community data — swap for a Supabase query when wiring up. */
export const communities: Community[] = [
  {
    id: "miami",
    name: "West Ave Miami",
    location: "Miami, Florida",
    imageUrl:
      "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80",
    memberCount: 420,
    tagline: "Where the ocean meets the scene",
  },
  {
    id: "la",
    name: "West Hollywood",
    location: "Los Angeles, California",
    imageUrl:
      "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=800&q=80",
    memberCount: 380,
    tagline: "Palm trees and possibilities",
  },
  {
    id: "nyc",
    name: "West Village",
    location: "New York, New York",
    imageUrl:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
    memberCount: 510,
    tagline: "Brownstones and bright lights",
  },
];
