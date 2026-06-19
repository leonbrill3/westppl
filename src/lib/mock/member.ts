import type { Chapter } from "@/types";

export interface MemberView {
  id: string;
  name: string;
  email: string;
  chapter: Chapter;
  status: "pending" | "active" | "suspended";
  cardNumber: string | null;
  instagram: string | null;
  isAdmin: boolean;
  joinedAt: string | null;
}

/** Fallback member used when no session is present (e.g. local preview). */
export const mockMember: MemberView = {
  id: "mock-member",
  name: "Demo Member",
  email: "demo@westppl.com",
  chapter: "la",
  status: "active",
  cardNumber: "WP-000127",
  instagram: "westppl",
  isAdmin: true,
  joinedAt: "2025-11-02T00:00:00Z",
};

export interface MemberRsvp {
  eventId: string;
  status: "confirmed" | "waitlist" | "cancelled";
  plusOne: boolean;
}

/** Mock RSVP state keyed by the events in src/lib/mock/events.ts. */
export const memberRsvps: MemberRsvp[] = [
  { eventId: "evt-1", status: "confirmed", plusOne: true },
  { eventId: "evt-2", status: "waitlist", plusOne: false },
];

export interface PartnerDeal {
  id: string;
  brand: string;
  offer: string;
  category: string;
}

export const partnerDeals: PartnerDeal[] = [
  { id: "deal-1", brand: "Hôtel Esmé", offer: "20% off members' rate + late checkout", category: "Stays" },
  { id: "deal-2", brand: "Equinox", offer: "Complimentary 1-month membership", category: "Wellness" },
  { id: "deal-3", brand: "Carbone", offer: "Priority reservations for members", category: "Dining" },
  { id: "deal-4", brand: "Away", offer: "15% off your first order", category: "Travel" },
];
