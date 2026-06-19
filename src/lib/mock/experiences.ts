import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "exp-1",
    title: "Coachella 2026",
    subtitle: "VIP Access Package",
    description:
      "Weekend VIP passes, artist-area access, and a private desert villa for the West Ppl crew.",
    location: "Indio, California",
    date: "2026-04-10",
    priceFrom: 4500,
    category: "events",
    imageUrl:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    membersOnly: true,
  },
  {
    id: "exp-2",
    title: "Amalfi Coast",
    subtitle: "Private Villa Experience",
    description:
      "Five nights on the Amalfi cliffs — private chef, a chartered boat day, and sunset aperitivo.",
    location: "Positano, Italy",
    date: "2026-05-22",
    priceFrom: 8200,
    category: "travel",
    imageUrl:
      "https://images.unsplash.com/photo-1534008897995-27a23e859048?w=800&q=80",
    membersOnly: true,
  },
  {
    id: "exp-3",
    title: "Paris Fashion Week",
    subtitle: "Backstage Access",
    description:
      "Front-row seats, backstage passes, and an invite-only afterparty during the week's biggest shows.",
    location: "Paris, France",
    date: "2026-07-07",
    priceFrom: 6900,
    category: "culture",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    membersOnly: true,
  },
  {
    id: "exp-4",
    title: "Tulum Wellness Retreat",
    subtitle: "Reset & Reconnect",
    description:
      "A four-day reset — daily yoga, cenote swims, sound baths, and plant-based cuisine in the jungle.",
    location: "Tulum, Mexico",
    date: "2026-09-15",
    priceFrom: 3800,
    category: "wellness",
    imageUrl:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    membersOnly: false,
  },
];
