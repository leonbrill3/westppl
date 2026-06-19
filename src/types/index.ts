export type Chapter = "miami" | "la" | "nyc";

export interface ChapterInfo {
  id: Chapter;
  name: string;
  fullName: string;
  tagline: string;
  color: string;
}

export const CHAPTERS: Record<Chapter, ChapterInfo> = {
  miami: {
    id: "miami",
    name: "West Ave",
    fullName: "Miami Beach",
    tagline: "Where the ocean meets the scene",
    color: "#0ea5e9", // sky blue
  },
  la: {
    id: "la",
    name: "West Hollywood",
    fullName: "Los Angeles",
    tagline: "Palm trees and possibilities",
    color: "#22c55e", // palm green
  },
  nyc: {
    id: "nyc",
    name: "West Village",
    fullName: "New York City",
    tagline: "Brownstones and bright lights",
    color: "#f97316", // terracotta
  },
};

export interface Member {
  id: string;
  email: string;
  phone?: string;
  name: string;
  chapter: Chapter;
  status: "pending" | "active" | "suspended";
  cardNumber?: string;
  instagram?: string;
  avatarUrl?: string;
  joinedAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  location: string;
  address?: string;
  chapter: Chapter;
  capacity?: number;
  isMembersOnly: boolean;
  isPublic: boolean;
  imageUrl?: string;
  category: EventCategory;
  createdBy: string;
  createdAt: string;
}

export type EventCategory =
  | "party"
  | "dinner"
  | "wellness"
  | "art"
  | "music"
  | "fashion"
  | "networking"
  | "other";

export interface RSVP {
  id: string;
  eventId: string;
  memberId: string;
  status: "confirmed" | "waitlist" | "cancelled" | "attended";
  plusOne: boolean;
  plusOneName?: string;
  checkedInAt?: string;
  createdAt: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  category: ArticleCategory;
  imageUrl?: string;
  authorId: string;
  publishedAt?: string;
  createdAt: string;
}

export type ArticleCategory =
  | "events"
  | "culture"
  | "people"
  | "west-nights"
  | "travel";

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  date: string;
  priceFrom?: number;
  category: "travel" | "events" | "dining" | "wellness" | "culture";
  imageUrl: string;
  membersOnly: boolean;
}

export interface MarketplaceCategory {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface MarketplaceListing {
  id: string;
  title: string;
  category: string;
  provider: string;
  description: string;
  imageUrl: string;
}

export interface Community {
  id: Chapter;
  name: string;
  location: string;
  imageUrl: string;
  memberCount: number;
  tagline: string;
}

export interface Application {
  id: string;
  name: string;
  email: string;
  phone: string;
  chapter: Chapter;
  instagram?: string;
  referral?: string;
  why?: string;
  status: "pending" | "approved" | "rejected";
  reviewedBy?: string;
  createdAt: string;
}
