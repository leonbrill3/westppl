"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  CreditCard,
  Settings,
  LogOut,
  ChevronRight,
  Clock,
  Users,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { Button } from "@/components/ui/Button";
import { CHAPTERS, type Member, type Event } from "@/types";
import { formatDate, formatTime } from "@/lib/utils";

// Mock data - will come from Supabase
const mockMember: Member = {
  id: "1",
  email: "sarah@example.com",
  phone: "+1 (555) 123-4567",
  name: "Sarah Mitchell",
  chapter: "miami",
  status: "active",
  cardNumber: "WP000124",
  instagram: "@sarahmitchell",
  avatarUrl: undefined,
  joinedAt: "2024-12-15",
};

const upcomingRsvps: { event: Event; status: "confirmed" | "waitlist" }[] = [
  {
    event: {
      id: "1",
      title: "Sunset Rooftop Session",
      description: "Join us for an exclusive sunset gathering.",
      date: "2025-05-15T18:00:00",
      location: "The Setai",
      chapter: "miami",
      capacity: 50,
      isMembersOnly: true,
      isPublic: false,
      imageUrl:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
      category: "party",
      createdBy: "admin",
      createdAt: "2025-05-01",
    },
    status: "confirmed",
  },
  {
    event: {
      id: "2",
      title: "Gallery Opening: New Perspectives",
      description: "Private viewing of emerging artists.",
      date: "2025-05-18T19:00:00",
      location: "Pérez Art Museum",
      chapter: "miami",
      capacity: 100,
      isMembersOnly: false,
      isPublic: true,
      imageUrl:
        "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80",
      category: "art",
      createdBy: "admin",
      createdAt: "2025-05-01",
    },
    status: "confirmed",
  },
];

export default function DashboardPage() {
  const [showCard, setShowCard] = useState(false);
  const member = mockMember;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 px-6">
        <div className="max-w-5xl mx-auto py-12">
          {/* Welcome */}
          <div className="mb-12">
            <h1 className="font-editorial text-3xl md:text-4xl mb-2">
              Welcome back, {member.name.split(" ")[0]}
            </h1>
            <p className="text-muted">
              {CHAPTERS[member.chapter].name} Chapter ·{" "}
              <span className="font-mono text-sm">{member.cardNumber}</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Upcoming Events */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-medium text-lg">Your Upcoming Events</h2>
                  <Link
                    href="/events"
                    className="text-sm text-muted hover:text-foreground flex items-center gap-1"
                  >
                    Browse all
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                {upcomingRsvps.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingRsvps.map(({ event, status }, i) => (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Link href={`/events/${event.id}`}>
                          <div className="flex gap-4 p-4 border border-border rounded-lg hover:border-foreground transition-colors">
                            <div
                              className="w-24 h-24 rounded bg-cover bg-center shrink-0"
                              style={{
                                backgroundImage: `url(${event.imageUrl})`,
                              }}
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2">
                                <h3 className="font-medium truncate">
                                  {event.title}
                                </h3>
                                <span
                                  className={`text-xs px-2 py-0.5 rounded shrink-0 ${
                                    status === "confirmed"
                                      ? "bg-green-100 text-green-700"
                                      : "bg-amber-100 text-amber-700"
                                  }`}
                                >
                                  {status === "confirmed"
                                    ? "Confirmed"
                                    : "Waitlist"}
                                </span>
                              </div>
                              <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {formatDate(event.date)}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {formatTime(event.date)}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" />
                                  {event.location}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 border border-border rounded-lg">
                    <Calendar className="w-8 h-8 text-muted mx-auto mb-3" />
                    <p className="text-muted mb-4">No upcoming events</p>
                    <Link href="/events">
                      <Button variant="outline" size="sm">
                        Browse Events
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg text-center">
                  <div className="text-2xl font-bold mb-1">12</div>
                  <div className="text-xs text-muted">Events Attended</div>
                </div>
                <div className="p-4 border border-border rounded-lg text-center">
                  <div className="text-2xl font-bold mb-1">
                    {new Date().getFullYear() -
                      new Date(member.joinedAt || "").getFullYear() || 1}
                  </div>
                  <div className="text-xs text-muted">Years Member</div>
                </div>
                <div className="p-4 border border-border rounded-lg text-center">
                  <div className="text-2xl font-bold mb-1">3</div>
                  <div className="text-xs text-muted">Referrals</div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Digital Card */}
              <div>
                <button
                  onClick={() => setShowCard(!showCard)}
                  className="w-full text-left"
                >
                  <div className="p-4 border border-border rounded-lg hover:border-foreground transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <CreditCard className="w-5 h-5 text-muted" />
                      <span className="font-medium">Digital Member Card</span>
                    </div>

                    {showCard && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative aspect-[1.6/1] rounded-lg overflow-hidden"
                        style={{
                          background: `linear-gradient(135deg, ${CHAPTERS[member.chapter].color}, #000)`,
                        }}
                      >
                        <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="text-xl font-editorial tracking-wider">
                                west/ppl
                              </div>
                              <div className="text-xs opacity-70 mt-1">
                                {CHAPTERS[member.chapter].name}
                              </div>
                            </div>
                            <Sparkles className="w-5 h-5 opacity-50" />
                          </div>

                          <div>
                            <div className="text-sm opacity-70 mb-1">Member</div>
                            <div className="font-medium">{member.name}</div>
                            <div className="font-mono text-sm mt-2 opacity-70">
                              {member.cardNumber}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {!showCard && (
                      <p className="text-sm text-muted">
                        Tap to view your digital membership card
                      </p>
                    )}
                  </div>
                </button>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="text-xs">
                    Add to Apple Wallet
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    Add to Google Wallet
                  </Button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="border border-border rounded-lg divide-y divide-border">
                <Link
                  href="/dashboard/settings"
                  className="flex items-center gap-3 p-4 hover:bg-muted/5 transition-colors"
                >
                  <Settings className="w-4 h-4 text-muted" />
                  <span className="text-sm">Account Settings</span>
                  <ChevronRight className="w-4 h-4 text-muted ml-auto" />
                </Link>
                <Link
                  href="/dashboard/referrals"
                  className="flex items-center gap-3 p-4 hover:bg-muted/5 transition-colors"
                >
                  <Users className="w-4 h-4 text-muted" />
                  <span className="text-sm">Refer a Friend</span>
                  <ChevronRight className="w-4 h-4 text-muted ml-auto" />
                </Link>
                <button className="flex items-center gap-3 p-4 hover:bg-muted/5 transition-colors w-full">
                  <LogOut className="w-4 h-4 text-muted" />
                  <span className="text-sm">Sign Out</span>
                </button>
              </div>

              {/* Chapter Info */}
              <div
                className="p-4 rounded-lg"
                style={{
                  backgroundColor: CHAPTERS[member.chapter].color + "10",
                }}
              >
                <h3 className="font-medium mb-2">
                  {CHAPTERS[member.chapter].name}
                </h3>
                <p className="text-sm text-muted mb-3">
                  {CHAPTERS[member.chapter].tagline}
                </p>
                <a
                  href="https://chat.whatsapp.com/your-group-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium flex items-center gap-2 hover:underline"
                  style={{ color: CHAPTERS[member.chapter].color }}
                >
                  Join Chapter WhatsApp
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
