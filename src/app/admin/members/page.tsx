"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  MoreVertical,
  Mail,
  CreditCard,
  UserX,
  UserCheck,
} from "lucide-react";
import { CHAPTERS, type Member } from "@/types";

// Mock members - will come from Supabase
const mockMembers: Member[] = [
  {
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
  },
  {
    id: "2",
    email: "james@example.com",
    phone: "+1 (555) 987-6543",
    name: "James Chen",
    chapter: "la",
    status: "active",
    cardNumber: "WP000089",
    instagram: "@jamesc",
    avatarUrl: undefined,
    joinedAt: "2024-11-20",
  },
  {
    id: "3",
    email: "emma@example.com",
    phone: "+1 (555) 456-7890",
    name: "Emma Rodriguez",
    chapter: "nyc",
    status: "active",
    cardNumber: "WP000156",
    instagram: "@emmarodriguez",
    avatarUrl: undefined,
    joinedAt: "2025-01-05",
  },
  {
    id: "4",
    email: "mike@example.com",
    phone: "+1 (555) 321-0987",
    name: "Mike Thompson",
    chapter: "miami",
    status: "pending",
    cardNumber: undefined,
    instagram: "@mikethompson",
    avatarUrl: undefined,
    joinedAt: "",
  },
];

export default function AdminMembersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [chapterFilter, setChapterFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const filteredMembers = mockMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (member.cardNumber?.toLowerCase() || "").includes(
        searchQuery.toLowerCase()
      );
    const matchesChapter =
      chapterFilter === "all" || member.chapter === chapterFilter;
    const matchesStatus =
      statusFilter === "all" || member.status === statusFilter;
    return matchesSearch && matchesChapter && matchesStatus;
  });

  const stats = {
    total: mockMembers.length,
    active: mockMembers.filter((m) => m.status === "active").length,
    pending: mockMembers.filter((m) => m.status === "pending").length,
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-editorial text-3xl mb-2">Members</h1>
          <p className="text-muted">
            {stats.active} active · {stats.pending} pending
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search by name, email, or card..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted" />
          <select
            value={chapterFilter}
            onChange={(e) => setChapterFilter(e.target.value)}
            className="px-3 py-2.5 border border-border rounded-lg bg-background focus:outline-none"
          >
            <option value="all">All Chapters</option>
            {Object.values(CHAPTERS).map((chapter) => (
              <option key={chapter.id} value={chapter.id}>
                {chapter.name}
              </option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2.5 border border-border rounded-lg bg-background focus:outline-none"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
      </div>

      {/* Members Table */}
      <div className="border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/5 border-b border-border">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-medium">
                Member
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium">
                Chapter
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium">
                Card Number
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium">
                Status
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium">
                Joined
              </th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member, i) => (
              <motion.tr
                key={member.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-border last:border-0 hover:bg-muted/5"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center text-sm font-medium">
                      {member.name[0]}
                    </div>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted">{member.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className="text-xs font-medium px-2 py-1 rounded"
                    style={{
                      backgroundColor: CHAPTERS[member.chapter].color + "20",
                      color: CHAPTERS[member.chapter].color,
                    }}
                  >
                    {CHAPTERS[member.chapter].name}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-mono">
                    {member.cardNumber || "—"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      member.status === "active"
                        ? "bg-green-100 text-green-700"
                        : member.status === "pending"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {member.status.charAt(0).toUpperCase() +
                      member.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-muted">
                  {member.joinedAt
                    ? new Date(member.joinedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })
                    : "—"}
                </td>
                <td className="px-6 py-4 relative">
                  <button
                    onClick={() =>
                      setActiveMenu(
                        activeMenu === member.id ? null : member.id
                      )
                    }
                    className="p-2 hover:bg-muted/10 rounded"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>

                  {activeMenu === member.id && (
                    <div className="absolute right-6 top-12 bg-background border border-border rounded-lg shadow-lg py-1 z-10 min-w-[160px]">
                      <button className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted/10 w-full">
                        <Mail className="w-4 h-4" />
                        Send Message
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted/10 w-full">
                        <CreditCard className="w-4 h-4" />
                        View Card
                      </button>
                      {member.status === "active" ? (
                        <button className="flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-muted/10 w-full">
                          <UserX className="w-4 h-4" />
                          Suspend
                        </button>
                      ) : member.status === "suspended" ? (
                        <button className="flex items-center gap-2 px-4 py-2 text-sm text-green-500 hover:bg-muted/10 w-full">
                          <UserCheck className="w-4 h-4" />
                          Reactivate
                        </button>
                      ) : null}
                    </div>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredMembers.length === 0 && (
        <div className="text-center py-12 text-muted">No members found</div>
      )}
    </div>
  );
}
