"use client";

import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Chapter, EventCategory } from "@/types";

export type EventRow = {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  chapter: Chapter;
  capacity: number | null;
  image_url: string | null;
  category: EventCategory;
};

export type RsvpInfo = { id: string; status: "confirmed" | "waitlist" };

/**
 * Loads events from Supabase plus the current member's RSVP state, and exposes
 * rsvp()/cancel() actions. RSVP inserts a row and reads back the status the
 * `check_event_capacity` DB trigger assigned (confirmed vs. waitlist), so
 * capacity/waitlist logic lives in the database, not here.
 */
export function useMemberEvents() {
  const [events, setEvents] = useState<EventRow[]>([]);
  const [rsvps, setRsvps] = useState<Record<string, RsvpInfo>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data: evs, error: evErr } = await supabase
      .from("events")
      .select("id, title, description, date, location, chapter, capacity, image_url, category")
      .order("date", { ascending: true });
    if (evErr) setError("Could not load events.");
    setEvents((evs as EventRow[]) ?? []);

    if (user) {
      const { data: rs } = await supabase
        .from("rsvps")
        .select("id, event_id, status")
        .eq("member_id", user.id);
      const map: Record<string, RsvpInfo> = {};
      (rs ?? []).forEach((r) => {
        if (r.status === "confirmed" || r.status === "waitlist") {
          map[r.event_id] = { id: r.id, status: r.status };
        }
      });
      setRsvps(map);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const rsvp = useCallback(async (eventId: string) => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;
    const { data, error } = await supabase
      .from("rsvps")
      .insert({ event_id: eventId, member_id: user.id })
      .select("id, status")
      .single();
    if (error || !data) {
      setError("Could not RSVP.");
      return;
    }
    const status = data.status;
    if (status === "confirmed" || status === "waitlist") {
      const info: RsvpInfo = { id: data.id, status };
      setRsvps((prev) => ({ ...prev, [eventId]: info }));
    }
  }, []);

  const cancel = useCallback(
    async (eventId: string) => {
      const info = rsvps[eventId];
      if (!info) return;
      const supabase = createClient();
      const { error } = await supabase.from("rsvps").delete().eq("id", info.id);
      if (error) {
        setError("Could not cancel RSVP.");
        return;
      }
      setRsvps((prev) => {
        const next = { ...prev };
        delete next[eventId];
        return next;
      });
    },
    [rsvps]
  );

  return { events, rsvps, loading, error, rsvp, cancel };
}
