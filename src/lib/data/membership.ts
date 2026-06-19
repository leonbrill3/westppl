import type { LucideIcon } from "lucide-react";
import {
  CreditCard,
  PartyPopper,
  CalendarHeart,
  Plane,
  Tag,
  Globe,
  Sparkles,
  ConciergeBell,
  CalendarDays,
  Compass,
  MessagesSquare,
} from "lucide-react";

export interface MembershipPerk {
  id: string;
  title: string;
  /** Short pink caps line under the title (Saga-style). */
  tagline: string;
  description: string;
  icon: LucideIcon;
  /** Where this perk lives in the app, if applicable. */
  href?: string;
}

/**
 * The West Ppl membership offering, modeled on the Saga Supper Club perk set.
 * This is product configuration (not placeholder data) — it drives the
 * membership page, the apply benefits, and later the dashboard.
 */
export const membershipPerks: MembershipPerk[] = [
  {
    id: "events",
    title: "Exclusive Events",
    tagline: "Yoga mornings to long-table dinners",
    description:
      "Members-only gatherings all month — sunrise breathwork, dinners, gallery nights, and more.",
    icon: CalendarHeart,
    href: "/events",
  },
  {
    id: "parties",
    title: "Free Party Entry",
    tagline: "Sunset soirées to night bashes",
    description:
      "Skip the line and the cover. Members walk straight into every West night.",
    icon: PartyPopper,
    href: "/events",
  },
  {
    id: "growing",
    title: "Ever-Growing Perks",
    tagline: "We're always adding more",
    description:
      "New partners, new cities, new experiences. Your membership only gets better.",
    icon: Sparkles,
  },
  {
    id: "circles",
    title: "Local Circles",
    tagline: "Your people in every city",
    description:
      "Tap into local chapters and meet trusted members wherever you land.",
    icon: Globe,
    href: "/community",
  },
  {
    id: "trips",
    title: "Members-Only Trips",
    tagline: "Adventure awaits",
    description:
      "Curated group getaways and chapter trips, from wellness resets to summer escapes.",
    icon: Plane,
    href: "/experiences",
  },
  {
    id: "deals",
    title: "Special Deals",
    tagline: "Brands that match our vibe",
    description:
      "Member pricing and unlocked access with the restaurants, studios, and labels we love.",
    icon: Tag,
    href: "/marketplace",
  },
  {
    id: "card",
    title: "Member Access Pass",
    tagline: "Your key to the community",
    description:
      "One pass unlocks events, perks, concierge, and chapter benefits across all three cities — in the app, and on a card if you want one.",
    icon: CreditCard,
    href: "/dashboard/card",
  },
];

export interface MemberService {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

/**
 * Member-facing services — the tools members use day to day (vs. the marketing
 * perks above). These map to dashboard areas as they get built out.
 */
export const memberServices: MemberService[] = [
  {
    id: "concierge",
    title: "Concierge Services",
    description:
      "A dedicated team for reservations, last-minute access, and the impossible-to-get.",
    icon: ConciergeBell,
    href: "/dashboard/concierge",
  },
  {
    id: "calendar",
    title: "Event Calendar",
    description:
      "Every gathering across your chapters in one place — RSVP and never miss a night.",
    icon: CalendarDays,
    href: "/dashboard/events",
  },
  {
    id: "travel",
    title: "Travel Services",
    description:
      "Trip planning, group getaways, and member rates on stays and flights.",
    icon: Compass,
    href: "/experiences",
  },
  {
    id: "chat",
    title: "Community Chat",
    description:
      "Group chats by city and interest — plan, connect, and keep the conversation going.",
    icon: MessagesSquare,
    href: "/community",
  },
];
