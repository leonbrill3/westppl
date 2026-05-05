"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Clock,
  Share2,
  Check,
  ExternalLink,
} from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { Button } from "@/components/ui/Button";
import { CHAPTERS, type Event } from "@/types";
import { formatDate, formatTime } from "@/lib/utils";

// Mock event - will come from Supabase
const mockEvent: Event = {
  id: "1",
  title: "Sunset Rooftop Session",
  description: `Join us for an exclusive sunset gathering with panoramic views and great company.

Experience the magic of Miami's skyline as the sun dips below the horizon. This intimate event brings together our community for an evening of connection, great music, and unforgettable moments.

What to expect:
• Complimentary welcome drinks
• Live DJ set
• Networking with fellow members
• Stunning rooftop views
• Light bites and refreshments

Dress code: Smart casual / Resort chic`,
  date: "2025-05-15T18:00:00",
  endDate: "2025-05-15T22:00:00",
  location: "The Setai",
  address: "2001 Collins Ave, Miami Beach, FL 33139",
  chapter: "miami",
  capacity: 50,
  isMembersOnly: true,
  isPublic: false,
  imageUrl: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80",
  category: "party",
  createdBy: "admin",
  createdAt: "2025-05-01",
};

export default function EventDetailPage() {
  const params = useParams();
  const [rsvpStatus, setRsvpStatus] = useState<"none" | "confirmed" | "waitlist">("none");
  const [isRsvping, setIsRsvping] = useState(false);
  const [showPlusOne, setShowPlusOne] = useState(false);
  const [plusOneName, setPlusOneName] = useState("");

  // In real app, fetch event by params.id
  const event = mockEvent;

  const handleRSVP = async () => {
    setIsRsvping(true);
    // TODO: Call API to create RSVP
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setRsvpStatus("confirmed");
    setIsRsvping(false);
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: event.title,
        text: event.description.substring(0, 100) + "...",
        url: window.location.href,
      });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const openInMaps = () => {
    const query = encodeURIComponent(event.address || event.location);
    window.open(`https://maps.google.com/maps?q=${query}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${event.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-24 left-6">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-white bg-black/30 backdrop-blur px-4 py-2 rounded-full hover:bg-black/50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-24 relative z-10">
        <div className="bg-background rounded-lg border border-border p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-wider text-muted">
                  {event.category}
                </span>
                <span className="text-xs text-muted">•</span>
                <span className="text-xs uppercase tracking-wider" style={{ color: CHAPTERS[event.chapter].color }}>
                  {CHAPTERS[event.chapter].name}
                </span>
                {event.isMembersOnly && (
                  <>
                    <span className="text-xs text-muted">•</span>
                    <span className="text-xs bg-foreground text-background px-2 py-0.5 rounded">
                      Members Only
                    </span>
                  </>
                )}
              </div>
              <h1 className="font-editorial text-3xl md:text-5xl mb-4">
                {event.title}
              </h1>
            </div>

            <Button variant="ghost" onClick={handleShare} className="shrink-0">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Event Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Calendar className="w-5 h-5 text-muted mt-1" />
                <div>
                  <p className="font-medium">{formatDate(event.date)}</p>
                  <p className="text-sm text-muted">
                    {formatTime(event.date)}
                    {event.endDate && ` - ${formatTime(event.endDate)}`}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-muted mt-1" />
                <div>
                  <p className="font-medium">{event.location}</p>
                  {event.address && (
                    <button
                      onClick={openInMaps}
                      className="text-sm text-muted hover:text-foreground flex items-center gap-1"
                    >
                      {event.address}
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {event.capacity && (
                <div className="flex items-start gap-4">
                  <Users className="w-5 h-5 text-muted mt-1" />
                  <div>
                    <p className="font-medium">{event.capacity} spots available</p>
                    <p className="text-sm text-muted">Limited capacity event</p>
                  </div>
                </div>
              )}
            </div>

            {/* RSVP Card */}
            <div className="bg-muted/10 rounded-lg p-6 border border-border">
              {rsvpStatus === "confirmed" ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">You&apos;re In!</h3>
                  <p className="text-sm text-muted mb-4">
                    We&apos;ve saved your spot. See you there!
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setRsvpStatus("none")}
                    className="text-sm"
                  >
                    Cancel RSVP
                  </Button>
                </motion.div>
              ) : rsvpStatus === "waitlist" ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">On the Waitlist</h3>
                  <p className="text-sm text-muted mb-4">
                    We&apos;ll notify you if a spot opens up.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setRsvpStatus("none")}
                    className="text-sm"
                  >
                    Leave Waitlist
                  </Button>
                </motion.div>
              ) : (
                <div>
                  <h3 className="font-medium text-lg mb-4">Reserve Your Spot</h3>

                  {/* Plus One Option */}
                  <div className="mb-6">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showPlusOne}
                        onChange={(e) => setShowPlusOne(e.target.checked)}
                        className="w-4 h-4 rounded border-border"
                      />
                      <span className="text-sm">Bringing a +1</span>
                    </label>

                    {showPlusOne && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="mt-3"
                      >
                        <input
                          type="text"
                          value={plusOneName}
                          onChange={(e) => setPlusOneName(e.target.value)}
                          placeholder="Guest name"
                          className="w-full px-3 py-2 border border-border rounded bg-background text-sm"
                        />
                      </motion.div>
                    )}
                  </div>

                  <Button
                    onClick={handleRSVP}
                    disabled={isRsvping}
                    className="w-full"
                    size="lg"
                  >
                    {isRsvping ? "Confirming..." : "RSVP Now"}
                  </Button>

                  <p className="text-xs text-muted text-center mt-4">
                    Free for West/PPL members
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none">
            <h2 className="font-editorial text-2xl mb-4">About This Event</h2>
            <div className="whitespace-pre-line text-muted">
              {event.description}
            </div>
          </div>

          {/* Share to WhatsApp */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted mb-4">Share with friends</p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `Check out this event: ${event.title}\n${window.location?.href || ""}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
              >
                Share on WhatsApp
              </a>
              <Button variant="outline" onClick={handleShare}>
                Copy Link
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-24" />
    </div>
  );
}
