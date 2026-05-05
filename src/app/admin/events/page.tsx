"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Calendar,
  MapPin,
  Users,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CHAPTERS, type Event } from "@/types";
import { formatDate, formatTime } from "@/lib/utils";

// Mock events - will come from Supabase
const mockEvents: Event[] = [
  {
    id: "1",
    title: "Sunset Rooftop Session",
    description: "Join us for an exclusive sunset gathering.",
    date: "2025-05-15T18:00:00",
    location: "The Setai",
    chapter: "miami",
    capacity: 50,
    isMembersOnly: true,
    isPublic: false,
    imageUrl: "",
    category: "party",
    createdBy: "admin",
    createdAt: "2025-05-01",
  },
  {
    id: "2",
    title: "Gallery Opening",
    description: "Private viewing of emerging artists.",
    date: "2025-05-18T19:00:00",
    location: "Pérez Art Museum",
    chapter: "miami",
    capacity: 100,
    isMembersOnly: false,
    isPublic: true,
    imageUrl: "",
    category: "art",
    createdBy: "admin",
    createdAt: "2025-05-01",
  },
];

export default function AdminEventsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const filteredEvents = mockEvents.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-editorial text-3xl mb-2">Events</h1>
          <p className="text-muted">Manage your community events</p>
        </div>
        <Link href="/admin/events/new">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Event
          </Button>
        </Link>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
        />
      </div>

      {/* Events Table */}
      <div className="border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/5 border-b border-border">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-medium">Event</th>
              <th className="text-left px-6 py-4 text-sm font-medium">Date</th>
              <th className="text-left px-6 py-4 text-sm font-medium">Chapter</th>
              <th className="text-left px-6 py-4 text-sm font-medium">RSVPs</th>
              <th className="text-left px-6 py-4 text-sm font-medium">Status</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((event, i) => (
              <motion.tr
                key={event.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-border last:border-0 hover:bg-muted/5"
              >
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-muted flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {event.location}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted" />
                    <div>
                      <p className="text-sm">{formatDate(event.date)}</p>
                      <p className="text-xs text-muted">{formatTime(event.date)}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className="text-xs font-medium px-2 py-1 rounded"
                    style={{
                      backgroundColor: CHAPTERS[event.chapter].color + "20",
                      color: CHAPTERS[event.chapter].color,
                    }}
                  >
                    {CHAPTERS[event.chapter].name}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-muted" />
                    <span className="text-sm">
                      24/{event.capacity || "∞"}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      new Date(event.date) > new Date()
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {new Date(event.date) > new Date() ? "Upcoming" : "Past"}
                  </span>
                </td>
                <td className="px-6 py-4 relative">
                  <button
                    onClick={() =>
                      setActiveMenu(activeMenu === event.id ? null : event.id)
                    }
                    className="p-2 hover:bg-muted/10 rounded"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>

                  {activeMenu === event.id && (
                    <div className="absolute right-6 top-12 bg-background border border-border rounded-lg shadow-lg py-1 z-10 min-w-[120px]">
                      <Link
                        href={`/events/${event.id}`}
                        className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted/10"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </Link>
                      <Link
                        href={`/admin/events/${event.id}/edit`}
                        className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted/10"
                      >
                        <Edit className="w-4 h-4" />
                        Edit
                      </Link>
                      <button className="flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-muted/10 w-full">
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
