"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { FadeIn } from "@/components/motion/FadeIn";

const categories = [
  "Dinner Reservation",
  "Travel",
  "Event Access",
  "Brand / Business",
  "General Request",
];

export default function ConciergePage() {
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submission. TODO: wire to a `concierge_requests` table
    // (insert { member_id, category, details, status }) once the table exists.
    setSubmitted(true);
  };

  return (
    <DashboardShell title="Concierge">
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 max-w-xl">
          {submitted ? (
            <FadeIn onView={false} className="border border-border p-10 text-center">
              <div className="w-14 h-14 rounded-full bg-pink/15 flex items-center justify-center mx-auto mb-6">
                <Check className="w-7 h-7 text-pink" />
              </div>
              <h2 className="font-headline text-2xl">Request Received</h2>
              <p className="font-body text-white/60 mt-3">
                Your concierge will be in touch shortly to take care of it.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setCategory("");
                  setDetails("");
                }}
                className="btn-outline mt-8"
              >
                New Request
              </button>
            </FadeIn>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="font-body text-white/60">
                Reservations, travel, last-minute access, the impossible-to-get
                — tell us what you need and consider it handled.
              </p>
              <div>
                <label className="font-caps text-sm text-muted block mb-2">
                  Request Type *
                </label>
                <select
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
                >
                  <option value="">Select a category</option>
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-caps text-sm text-muted block mb-2">
                  Details *
                </label>
                <textarea
                  required
                  rows={5}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Tell us what you're after — dates, party size, preferences…"
                  className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="btn-primary inline-flex items-center gap-2"
              >
                Submit Request
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        <aside className="lg:col-span-1">
          <div className="border border-border p-6">
            <h3 className="font-caps text-xs text-white/40 mb-4">
              How It Works
            </h3>
            <ul className="space-y-4 font-body text-sm text-white/70">
              <li>1. Tell us what you need.</li>
              <li>2. Your concierge confirms the details.</li>
              <li>3. We handle the rest — you just show up.</li>
            </ul>
          </div>
        </aside>
      </div>
    </DashboardShell>
  );
}
