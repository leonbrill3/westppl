"use client";

import Link from "next/link";
import { ArrowRight, CreditCard, CalendarDays, Sparkles, ConciergeBell } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { MemberCard } from "@/components/membership/MemberCard";
import { Pill } from "@/components/ui/Pill";
import { FadeIn } from "@/components/motion/FadeIn";
import { useCurrentMember } from "@/lib/hooks/useCurrentMember";
import { useMemberEvents } from "@/lib/hooks/useMemberEvents";
import { membershipPerks } from "@/lib/data/membership";
import { CHAPTERS } from "@/types";
import { formatEventDate } from "@/lib/utils";

const quickLinks = [
  { label: "Member Pass", href: "/dashboard/card", icon: CreditCard },
  { label: "Events", href: "/dashboard/events", icon: CalendarDays },
  { label: "Perks", href: "/dashboard/perks", icon: Sparkles },
  { label: "Concierge", href: "/dashboard/concierge", icon: ConciergeBell },
];

export default function DashboardOverview() {
  const { member } = useCurrentMember();
  const { events, rsvps } = useMemberEvents();
  const firstName = member?.name?.split(" ")[0];
  const upcoming = events.slice(0, 2);

  return (
    <DashboardShell
      eyebrow="Welcome Back"
      title={firstName ? `Hi, ${firstName}` : "Your Dashboard"}
      action={
        <Link href="/dashboard/events" className="btn-outline">
          Browse Events
        </Link>
      }
    >
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Member card preview */}
        <FadeIn onView={false} className="lg:col-span-1">
          <Link href="/dashboard/card" className="block group">
            <MemberCard
              name={member?.name}
              cardNumber={member?.cardNumber ?? undefined}
              chapter={member?.chapter}
            />
            <p className="font-caps text-xs text-white/50 group-hover:text-pink transition-colors inline-flex items-center gap-1 mt-4">
              View your pass <ArrowRight className="w-3 h-3" />
            </p>
          </Link>
        </FadeIn>

        {/* Quick links */}
        <FadeIn onView={false} delay={0.1} className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-px bg-border h-full">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-4 bg-black p-6 hover:bg-dark-gray transition-colors"
              >
                <div className="w-11 h-11 flex items-center justify-center bg-pink/15 text-pink group-hover:bg-pink group-hover:text-black transition-colors shrink-0">
                  <link.icon className="w-5 h-5" />
                </div>
                <span className="font-headline text-xl">{link.label}</span>
                <ArrowRight className="w-4 h-4 ml-auto text-white/30 group-hover:text-pink transition-colors" />
              </Link>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Upcoming events */}
      <div className="mt-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-headline text-2xl">Upcoming Events</h2>
          <Link
            href="/dashboard/events"
            className="font-caps text-xs text-white/50 hover:text-pink transition-colors inline-flex items-center gap-1"
          >
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {upcoming.map((event) => {
            const status = rsvps[event.id]?.status;
            return (
              <Link
                key={event.id}
                href="/dashboard/events"
                className="group border border-border p-6 hover:border-pink transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-caps text-[10px] text-pink">
                    {formatEventDate(event.date)} &bull;{" "}
                    {CHAPTERS[event.chapter].fullName}
                  </span>
                  {status === "confirmed" && <Pill variant="pink">Going</Pill>}
                  {status === "waitlist" && (
                    <Pill variant="muted">Waitlist</Pill>
                  )}
                </div>
                <h3 className="font-headline text-xl">{event.title}</h3>
                <p className="font-body text-sm text-white/50 mt-1">
                  {event.location}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Perks quick row */}
      <div className="mt-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="font-headline text-2xl">Your Perks</h2>
          <Link
            href="/dashboard/perks"
            className="font-caps text-xs text-white/50 hover:text-pink transition-colors inline-flex items-center gap-1"
          >
            View all <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="flex flex-wrap gap-3">
          {membershipPerks.map((perk) => (
            <span
              key={perk.id}
              className="inline-flex items-center gap-2 border border-border px-4 py-2 font-caps text-[10px] text-white/70"
            >
              <perk.icon className="w-4 h-4 text-pink" />
              {perk.title}
            </span>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
