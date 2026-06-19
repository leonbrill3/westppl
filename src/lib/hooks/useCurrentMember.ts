"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { mockMember, type MemberView } from "@/lib/mock/member";

/**
 * Returns the current member's profile.
 *
 * Reads the real `members` row for the signed-in user; if there's no session
 * or no matching row (e.g. local preview), falls back to mock data so the
 * dashboard shell always renders. Swap-free once auth + members are populated.
 */
export function useCurrentMember() {
  const [member, setMember] = useState<MemberView | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        if (active) {
          setMember(mockMember);
          setLoading(false);
        }
        return;
      }

      const { data } = await supabase
        .from("members")
        .select(
          "id, name, email, chapter, status, card_number, instagram, is_admin, joined_at"
        )
        .eq("id", user.id)
        .single();

      if (!active) return;
      setMember(
        data
          ? {
              id: data.id,
              name: data.name,
              email: data.email,
              chapter: data.chapter,
              status: data.status,
              cardNumber: data.card_number,
              instagram: data.instagram,
              isAdmin: data.is_admin ?? false,
              joinedAt: data.joined_at,
            }
          : { ...mockMember, email: user.email ?? mockMember.email }
      );
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, []);

  return { member, loading };
}
