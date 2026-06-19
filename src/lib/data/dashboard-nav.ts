import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  CreditCard,
  CalendarDays,
  Sparkles,
  ConciergeBell,
  User,
} from "lucide-react";

export interface DashboardNavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const dashboardNav: DashboardNavItem[] = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Member Pass", href: "/dashboard/card", icon: CreditCard },
  { label: "Events", href: "/dashboard/events", icon: CalendarDays },
  { label: "Perks", href: "/dashboard/perks", icon: Sparkles },
  { label: "Concierge", href: "/dashboard/concierge", icon: ConciergeBell },
  { label: "Profile", href: "/dashboard/profile", icon: User },
];
