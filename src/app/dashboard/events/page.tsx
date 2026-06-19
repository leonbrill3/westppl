"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Pill } from "@/components/ui/Pill";
import { FadeIn } from "@/components/motion/FadeIn";
import { useMemberEvents } from "@/lib/hooks/useMemberEvents";
import { CHAPTERS } from "@/types";
import { formatEventDate, formatTime } from "@/lib/utils";

export default function DashboardEventsPage() {
  const { events, rsvps, loading, error, rsvp, cancel } = useMemberEvents();

  return (
    <DashboardShell title="Events">
      <p className="font-body text-white/60 -mt-6 mb-10 max-w-xl">
        Every gathering across your chapters. RSVP to lock your spot — full
        events add you to the waitlist automatically.
      </p>

      {error && <p className="text-sm text-red-400 mb-6">{error}</p>}
      {loading && (
        <p className="font-caps text-xs text-muted">Loading events…</p>
      )}
      {!loading && events.length === 0 && (
        <p className="font-body text-sm text-white/50">
          No events scheduled yet. Check back soon.
        </p>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, i) => {
          const status = rsvps[event.id]?.status;
          const going = status === "confirmed";
          const waitlisted = status === "waitlist";
          return (
            <FadeIn key={event.id} onView={false} delay={(i % 3) * 0.08} className="h-full">
              <article className="group flex h-full flex-col border border-border hover:border-white/30 transition-colors">
                <div className="relative aspect-[16/10] overflow-hidden">
                  {event.image_url && (
                    <Image
                      src={event.image_url}
                      alt={event.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  )}
                  <div className="absolute top-3 left-3">
                    <Pill variant="solid">{formatEventDate(event.date)}</Pill>
                  </div>
                  {going && (
                    <div className="absolute top-3 right-3">
                      <Pill variant="pink">Going</Pill>
                    </div>
                  )}
                  {waitlisted && (
                    <div className="absolute top-3 right-3">
                      <Pill variant="muted">Waitlist</Pill>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <span className="font-caps text-[10px] text-pink">
                    {CHAPTERS[event.chapter].fullName} &bull;{" "}
                    {formatTime(event.date)}
                  </span>
                  <h3 className="font-headline text-xl mt-2">{event.title}</h3>
                  <p className="font-body text-sm text-white/50 mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {event.location}
                  </p>
                  <p className="font-body text-sm text-white/60 mt-3 line-clamp-2">
                    {event.description}
                  </p>

                  <button
                    onClick={() => (status ? cancel(event.id) : rsvp(event.id))}
                    className={
                      "mt-5 " + (status ? "btn-outline w-full" : "btn-primary w-full")
                    }
                  >
                    {going
                      ? "Cancel RSVP"
                      : waitlisted
                        ? "Leave Waitlist"
                        : "RSVP"}
                  </button>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </DashboardShell>
  );
}
