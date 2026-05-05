"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { CHAPTERS, type Chapter, type Event, type EventCategory } from "@/types";
import { formatEventDate, formatTime } from "@/lib/utils";

// Mock events data - will come from Supabase
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Sunset Rooftop Session",
    description: "Join us for an exclusive sunset gathering with panoramic views, craft cocktails, and an atmosphere that captures the essence of Miami nightlife.",
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
    description: "Private viewing of emerging artists at one of Miami's premier galleries. Meet the artists and fellow collectors.",
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
    description: "Start your day with oceanfront yoga followed by healthy refreshments and meaningful connections.",
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
    description: "An intimate dinner at a secret location in the Hollywood Hills. Limited to 20 guests.",
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
    description: "Exclusive pre-party with designers and industry insiders. The ultimate kickoff to fashion week.",
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
  {
    id: "6",
    title: "Sound Garden: Electronic Night",
    description: "An immersive electronic music experience in an unexpected venue. Underground sounds, elevated crowd.",
    date: "2025-05-28T22:00:00",
    location: "Secret Location",
    address: "TBA",
    chapter: "la",
    capacity: 200,
    isMembersOnly: true,
    isPublic: false,
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    category: "music",
    createdBy: "admin",
    createdAt: "2025-05-01",
  },
];

const chapters = Object.values(CHAPTERS);

const categories: { value: EventCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
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

  const featuredEvent = filteredEvents[0];
  const otherEvents = filteredEvents.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="font-caps text-muted mb-4">Calendar</p>
            <h1 className="font-editorial text-5xl md:text-7xl mb-6">Events</h1>
            <p className="text-lg text-muted max-w-2xl">
              From intimate dinners to legendary parties—discover what&apos;s happening
              across our chapters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 lg:top-20 z-40 bg-background/95 backdrop-blur-nav border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Chapter Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedChapter("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedChapter === "all"
                    ? "bg-foreground text-background"
                    : "bg-sand hover:bg-stone"
                }`}
              >
                All Chapters
              </button>
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  onClick={() => setSelectedChapter(chapter.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedChapter === chapter.id
                      ? "bg-foreground text-background"
                      : "bg-sand hover:bg-stone"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: chapter.color }}
                  />
                  {chapter.name}
                </button>
              ))}
            </div>

            {/* Category Select */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3 py-1.5 rounded text-sm whitespace-nowrap transition-all ${
                    selectedCategory === cat.value
                      ? "bg-accent text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Content */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <AnimatePresence mode="wait">
            {filteredEvents.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-24"
              >
                <p className="font-editorial text-3xl mb-4">No events found</p>
                <p className="text-muted mb-8">
                  Try adjusting your filters to see more events.
                </p>
                <button
                  onClick={() => {
                    setSelectedChapter("all");
                    setSelectedCategory("all");
                  }}
                  className="px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="events"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Featured Event */}
                {featuredEvent && (
                  <Link href={`/events/${featuredEvent.id}`} className="block mb-16">
                    <motion.article
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="group grid lg:grid-cols-2 gap-8 items-center"
                    >
                      {/* Image */}
                      <div className="relative aspect-[4/3] lg:aspect-[3/2] rounded-xl overflow-hidden">
                        <Image
                          src={featuredEvent.imageUrl || ""}
                          alt={featuredEvent.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        {/* Date Badge */}
                        <div className="absolute top-6 left-6 bg-white px-4 py-3 rounded-lg text-center">
                          <p className="font-caps text-xs text-muted">
                            {new Date(featuredEvent.date).toLocaleDateString("en-US", { month: "short" })}
                          </p>
                          <p className="font-editorial text-2xl leading-none">
                            {new Date(featuredEvent.date).getDate()}
                          </p>
                        </div>

                        {/* Featured Tag */}
                        <div className="absolute top-6 right-6 bg-accent px-3 py-1.5 rounded-full">
                          <p className="font-caps text-xs">Featured</p>
                        </div>

                        {/* Chapter */}
                        <div className="absolute bottom-6 left-6 flex items-center gap-2 text-white">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{CHAPTERS[featuredEvent.chapter].name}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:pl-8">
                        <p className="font-caps text-muted mb-4">{featuredEvent.category}</p>
                        <h2 className="font-editorial text-3xl md:text-4xl lg:text-5xl mb-4 group-hover:text-accent transition-colors">
                          {featuredEvent.title}
                        </h2>
                        <p className="text-lg text-muted mb-6 line-clamp-3">
                          {featuredEvent.description}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm text-muted mb-8">
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {formatTime(featuredEvent.date)}
                          </span>
                          <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {featuredEvent.location}
                          </span>
                          {featuredEvent.capacity && (
                            <span className="flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              {featuredEvent.capacity} spots
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-sm font-medium group-hover:text-accent transition-colors">
                          View Details
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </motion.article>
                  </Link>
                )}

                {/* Other Events Grid */}
                {otherEvents.length > 0 && (
                  <>
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-caps text-muted">Upcoming Events</h3>
                      <p className="text-sm text-muted">
                        {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {otherEvents.map((event, i) => (
                        <motion.div
                          key={event.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Link href={`/events/${event.id}`}>
                            <article className="group h-full">
                              {/* Image */}
                              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-5">
                                <Image
                                  src={event.imageUrl || ""}
                                  alt={event.title}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* Date */}
                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg text-center">
                                  <p className="font-caps text-[10px] text-muted">
                                    {new Date(event.date).toLocaleDateString("en-US", { month: "short" })}
                                  </p>
                                  <p className="font-editorial text-lg leading-none">
                                    {new Date(event.date).getDate()}
                                  </p>
                                </div>

                                {/* Members Only */}
                                {event.isMembersOnly && (
                                  <div className="absolute top-4 right-4 bg-foreground text-background text-[10px] font-medium px-2 py-1 rounded">
                                    Members
                                  </div>
                                )}

                                {/* Hover Arrow */}
                                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                                  <ArrowUpRight className="w-4 h-4" />
                                </div>
                              </div>

                              {/* Content */}
                              <div>
                                <div className="flex items-center gap-3 mb-3">
                                  <span
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: CHAPTERS[event.chapter].color }}
                                  />
                                  <span className="text-xs text-muted">
                                    {CHAPTERS[event.chapter].name}
                                  </span>
                                  <span className="text-xs text-muted">•</span>
                                  <span className="text-xs text-muted capitalize">{event.category}</span>
                                </div>

                                <h3 className="font-editorial text-xl mb-2 group-hover:text-accent transition-colors">
                                  {event.title}
                                </h3>

                                <p className="text-sm text-muted line-clamp-2 mb-4">
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
                                </div>
                              </div>
                            </article>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 bg-cream">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-caps text-muted mb-4">Get Access</p>
          <h2 className="font-editorial text-3xl md:text-4xl mb-6">
            Want to attend exclusive members-only events?
          </h2>
          <p className="text-muted mb-8">
            Join West/PPL to unlock access to our full calendar of curated experiences
            across Miami, Los Angeles, and New York.
          </p>
          <Link
            href="/apply"
            className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-medium transition-all hover:bg-foreground/90"
          >
            Apply to Join
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
