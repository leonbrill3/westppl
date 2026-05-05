"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, Filter } from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { Button } from "@/components/ui/Button";
import { CHAPTERS, type Chapter, type Event, type EventCategory } from "@/types";
import { formatEventDate, formatTime } from "@/lib/utils";

// Mock events data - will come from Supabase
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Sunset Rooftop Session",
    description: "Join us for an exclusive sunset gathering with panoramic views and great company.",
    date: "2025-05-15T18:00:00",
    location: "The Setai",
    address: "2001 Collins Ave, Miami Beach",
    chapter: "miami",
    capacity: 50,
    isMembersOnly: true,
    isPublic: false,
    imageUrl: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    category: "party",
    createdBy: "admin",
    createdAt: "2025-05-01",
  },
  {
    id: "2",
    title: "Gallery Opening: New Perspectives",
    description: "Private viewing of emerging artists at one of Miami's premier galleries.",
    date: "2025-05-18T19:00:00",
    location: "Pérez Art Museum",
    address: "1103 Biscayne Blvd, Miami",
    chapter: "miami",
    capacity: 100,
    isMembersOnly: false,
    isPublic: true,
    imageUrl: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80",
    category: "art",
    createdBy: "admin",
    createdAt: "2025-05-01",
  },
  {
    id: "3",
    title: "Wellness Morning: Beach Yoga",
    description: "Start your day with oceanfront yoga followed by healthy refreshments.",
    date: "2025-05-20T07:00:00",
    location: "South Beach",
    address: "Ocean Drive & 5th Street",
    chapter: "miami",
    capacity: 30,
    isMembersOnly: true,
    isPublic: false,
    imageUrl: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
    category: "wellness",
    createdBy: "admin",
    createdAt: "2025-05-01",
  },
  {
    id: "4",
    title: "LA Members Dinner",
    description: "An intimate dinner at a secret location in the Hollywood Hills.",
    date: "2025-05-22T20:00:00",
    location: "Private Residence",
    address: "Hollywood Hills",
    chapter: "la",
    capacity: 20,
    isMembersOnly: true,
    isPublic: false,
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    category: "dinner",
    createdBy: "admin",
    createdAt: "2025-05-01",
  },
  {
    id: "5",
    title: "NYC Fashion Week Pre-Party",
    description: "Exclusive pre-party with designers and industry insiders.",
    date: "2025-05-25T21:00:00",
    location: "The Standard",
    address: "848 Washington St, New York",
    chapter: "nyc",
    capacity: 150,
    isMembersOnly: true,
    isPublic: false,
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "fashion",
    createdBy: "admin",
    createdAt: "2025-05-01",
  },
];

const categories: { value: EventCategory | "all"; label: string }[] = [
  { value: "all", label: "All Events" },
  { value: "party", label: "Parties" },
  { value: "dinner", label: "Dinners" },
  { value: "wellness", label: "Wellness" },
  { value: "art", label: "Art" },
  { value: "music", label: "Music" },
  { value: "fashion", label: "Fashion" },
];

export default function EventsPage() {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | "all">("all");
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | "all">("all");

  const filteredEvents = mockEvents.filter((event) => {
    if (selectedChapter !== "all" && event.chapter !== selectedChapter) return false;
    if (selectedCategory !== "all" && event.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 px-6">
        <div className="max-w-7xl mx-auto py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-editorial text-4xl md:text-6xl mb-4">Events</h1>
            <p className="text-lg text-muted max-w-2xl">
              From intimate dinners to legendary parties, discover what&apos;s
              happening across our chapters.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-12 pb-8 border-b border-border">
            {/* Chapter Filter */}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted" />
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value as Chapter | "all")}
                className="bg-transparent border-none text-sm font-medium focus:outline-none cursor-pointer"
              >
                <option value="all">All Chapters</option>
                {Object.values(CHAPTERS).map((chapter) => (
                  <option key={chapter.id} value={chapter.id}>
                    {chapter.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as EventCategory | "all")}
                className="bg-transparent border-none text-sm font-medium focus:outline-none cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Events Grid */}
          {filteredEvents.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-muted text-lg mb-4">No events found</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedChapter("all");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/events/${event.id}`}>
                    <article className="group">
                      {/* Image */}
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                          style={{ backgroundImage: `url(${event.imageUrl})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        {/* Date Badge */}
                        <div className="absolute top-4 left-4 bg-white text-black px-3 py-2 rounded text-center">
                          <div className="text-xs font-bold">
                            {formatEventDate(event.date).split(" ")[0]}
                          </div>
                          <div className="text-lg font-bold leading-none">
                            {formatEventDate(event.date).split(" ")[1]}
                          </div>
                        </div>

                        {/* Members Only Badge */}
                        {event.isMembersOnly && (
                          <div className="absolute top-4 right-4 bg-foreground text-background text-xs px-2 py-1 rounded">
                            Members Only
                          </div>
                        )}

                        {/* Chapter Badge */}
                        <div className="absolute bottom-4 left-4 text-white text-sm">
                          {CHAPTERS[event.chapter].name}
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <p className="text-xs text-muted uppercase tracking-wider mb-2">
                          {event.category}
                        </p>
                        <h3 className="font-editorial text-xl mb-2 group-hover:underline">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted line-clamp-2 mb-3">
                          {event.description}
                        </p>

                        <div className="flex items-center gap-4 text-xs text-muted">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {formatTime(event.date)}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {event.location}
                          </span>
                          {event.capacity && (
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {event.capacity} spots
                            </span>
                          )}
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
