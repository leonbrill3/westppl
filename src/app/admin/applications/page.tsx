"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  Check,
  X,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CHAPTERS, type Application, type Chapter } from "@/types";

// Mock applications - will come from Supabase
const mockApplications: Application[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    email: "sarah@example.com",
    phone: "+1 (555) 123-4567",
    chapter: "miami",
    instagram: "@sarahmitchell",
    referral: "Friend - Alex K.",
    why: "I've been looking for a community of like-minded individuals who appreciate good experiences. I love hosting dinner parties and connecting people.",
    status: "pending",
    createdAt: "2025-05-03T14:30:00",
  },
  {
    id: "2",
    name: "James Chen",
    email: "james.chen@example.com",
    phone: "+1 (555) 987-6543",
    chapter: "la",
    instagram: "@jamesc",
    referral: "Instagram",
    why: "I'm a creative director looking to expand my network and meet inspiring people. I'm passionate about art, music, and fashion.",
    status: "pending",
    createdAt: "2025-05-02T10:15:00",
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    email: "emma.r@example.com",
    phone: "+1 (555) 456-7890",
    chapter: "nyc",
    instagram: "@emmarodriguez",
    referral: "West/PPL event",
    why: "Attended a gallery opening and loved the vibe. Want to be part of the community and contribute to future events.",
    status: "approved",
    createdAt: "2025-05-01T16:45:00",
  },
];

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState(mockApplications);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleApprove = (id: string) => {
    setApplications((apps) =>
      apps.map((app) =>
        app.id === id ? { ...app, status: "approved" as const } : app
      )
    );
    // TODO: Call API to approve and send welcome email
  };

  const handleReject = (id: string) => {
    setApplications((apps) =>
      apps.map((app) =>
        app.id === id ? { ...app, status: "rejected" as const } : app
      )
    );
    // TODO: Call API to reject
  };

  const pendingCount = applications.filter(
    (app) => app.status === "pending"
  ).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-editorial text-3xl mb-2">Applications</h1>
          <p className="text-muted">
            {pendingCount} pending application{pendingCount !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2.5 border border-border rounded-lg bg-background focus:outline-none"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Applications List */}
      <div className="space-y-4">
        {filteredApplications.map((app, i) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="border border-border rounded-lg overflow-hidden"
          >
            {/* Header */}
            <div
              className="p-6 cursor-pointer hover:bg-muted/5"
              onClick={() =>
                setExpandedId(expandedId === app.id ? null : app.id)
              }
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center text-lg font-medium">
                    {app.name[0]}
                  </div>
                  <div>
                    <h3 className="font-medium">{app.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted">
                      <span>{app.email}</span>
                      <span
                        style={{ color: CHAPTERS[app.chapter].color }}
                      >
                        {CHAPTERS[app.chapter].name}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded ${
                      app.status === "pending"
                        ? "bg-amber-100 text-amber-700"
                        : app.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </span>

                  {app.status === "pending" && (
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApprove(app.id);
                        }}
                        className="p-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleReject(app.id);
                        }}
                        className="p-2 rounded-lg bg-red-500 text-white hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedId === app.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-border"
              >
                <div className="p-6 bg-muted/5">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Contact</h4>
                      <div className="space-y-2 text-sm">
                        <a
                          href={`mailto:${app.email}`}
                          className="flex items-center gap-2 text-muted hover:text-foreground"
                        >
                          <Mail className="w-4 h-4" />
                          {app.email}
                        </a>
                        <a
                          href={`tel:${app.phone}`}
                          className="flex items-center gap-2 text-muted hover:text-foreground"
                        >
                          <Phone className="w-4 h-4" />
                          {app.phone}
                        </a>
                        {app.instagram && (
                          <a
                            href={`https://instagram.com/${app.instagram.replace(
                              "@",
                              ""
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-muted hover:text-foreground"
                          >
                            <ExternalLink className="w-4 h-4" />
                            {app.instagram}
                          </a>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Referral</h4>
                      <p className="text-sm text-muted">
                        {app.referral || "Not specified"}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">
                      Why they want to join
                    </h4>
                    <p className="text-sm text-muted whitespace-pre-line">
                      {app.why}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <p className="text-xs text-muted">
                      Applied{" "}
                      {new Date(app.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>

                    {app.status === "pending" && (
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          onClick={() => handleReject(app.id)}
                        >
                          <X className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                        <Button onClick={() => handleApprove(app.id)}>
                          <Check className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {filteredApplications.length === 0 && (
        <div className="text-center py-12 text-muted">
          No applications found
        </div>
      )}
    </div>
  );
}
