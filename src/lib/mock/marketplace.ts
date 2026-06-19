import type { MarketplaceCategory, MarketplaceListing } from "@/types";

export const marketplaceCategories: MarketplaceCategory[] = [
  {
    id: "travel",
    title: "Travel",
    description: "Curated getaways & experiences",
    imageUrl:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
  },
  {
    id: "dining",
    title: "Dining",
    description: "Reservations & exclusive access",
    imageUrl:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    id: "wellness",
    title: "Wellness",
    description: "Mind, body & soul",
    imageUrl:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  },
  {
    id: "events",
    title: "Events",
    description: "VIP access & experiences",
    imageUrl:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
  },
];

export const marketplaceListings: MarketplaceListing[] = [
  {
    id: "mkt-1",
    title: "Private Yacht Day Charter",
    category: "Travel",
    provider: "Biscayne Charters",
    description:
      "A crewed catamaran for up to 12, with paddleboards, a chef option, and sandbar stops.",
    imageUrl:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  },
  {
    id: "mkt-2",
    title: "Chef's Table at Nōar",
    category: "Dining",
    provider: "Nōar Miami",
    description:
      "Priority reservations and a members-only tasting menu from a Michelin-trained kitchen.",
    imageUrl:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  },
  {
    id: "mkt-3",
    title: "Longevity Lab Membership",
    category: "Wellness",
    provider: "Restore Studios",
    description:
      "Cryotherapy, IV drips, and recovery suites with preferred member pricing.",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  },
];
