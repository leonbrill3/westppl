"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Check, X, Mail, Phone, ExternalLink } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { CHAPTERS, type Chapter } from "@/types";

type ApplicationRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  chapter: Chapter;
  instagram: string | null;
  referral: string | null;
  why: string;
  industry: string | null;
  title: string | null;
  company: string | null;
  contribution: string | null;
  social_platform: string | null;
  social_handle: string | null;
  address: string | null;
  birthday: string | null;
  status: "pending" | "approved" | "rejected";
  created_at: string;
};

function socialUrl(platform: string | null, handle: string | null) {
  if (!handle) return null;
  const h = handle.replace(/^@/, "");
  if (platform === "linkedin") {
    return h.startsWith("http") ? h : `https://${h.replace(/^(www\.)?linkedin\.com\//, "linkedin.com/")}`;
  }
  return `https://instagram.com/${h}`;
}

const statusStyles: Record<string, string> = {
  pending: "bg-white/10 text-white/70",
  approved: "bg-pink/15 text-pink",
  rejected: "bg-red-500/15 text-red-400",
};

export default function AdminApplicationsPage() {
  const [applications, setApplications] = useState<ApplicationRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("applications")
        .select(
          "id, name, email, phone, chapter, instagram, referral, why, industry, title, company, contribution, social_platform, social_handle, address, birthday, status, created_at"
        )
        .order("created_at", { ascending: false });
      if (error) setError("Could not load applications.");
      else setApplications((data as ApplicationRow[]) ?? []);
      setLoading(false);
    })();
  }, []);

  const reject = async (id: string) => {
    setBusyId(id);
    const supabase = createClient();
    const { error } = await supabase
      .from("applications")
      .update({ status: "rejected" })
      .eq("id", id);
    setBusyId(null);
    if (error) {
      setError("Could not update application.");
      return;
    }
    setApplications((apps) =>
      apps.map((app) => (app.id === id ? { ...app, status: "rejected" } : app))
    );
  };

  // Approve goes through the server route: it creates the member account
  // (auth user + members row + card number) using the service-role key.
  const approve = async (id: string) => {
    setBusyId(id);
    setError(null);
    const res = await fetch("/api/admin/applications/approve", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ applicationId: id }),
    });
    setBusyId(null);
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setError(body.error ?? "Could not approve application.");
      return;
    }
    setApplications((apps) =>
      apps.map((app) => (app.id === id ? { ...app, status: "approved" } : app))
    );
  };

  const filtered = applications.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const pendingCount = applications.filter((a) => a.status === "pending").length;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-headline text-3xl mb-2">Applications</h1>
          <p className="text-muted text-sm">
            {loading
              ? "Loading…"
              : `${pendingCount} pending application${pendingCount !== 1 ? "s" : ""}`}
          </p>
        </div>
      </div>

      {error && (
        <p className="mb-6 text-sm text-red-400 font-body">{error}</p>
      )}

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-pink"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2.5 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-pink"
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {filtered.map((app, i) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className="border border-border rounded-lg overflow-hidden"
          >
            <div
              className="p-6 cursor-pointer hover:bg-muted/5"
              onClick={() =>
                setExpandedId(expandedId === app.id ? null : app.id)
              }
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center text-lg font-medium shrink-0">
                    {app.name[0]}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-medium truncate">{app.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted">
                      <span className="truncate">{app.email}</span>
                      <span className="text-pink shrink-0">
                        {CHAPTERS[app.chapter].name}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <span
                    className={`text-[10px] font-caps px-2 py-1 rounded ${statusStyles[app.status]}`}
                  >
                    {app.status}
                  </span>

                  {app.status === "pending" && (
                    <div className="flex gap-2">
                      <button
                        disabled={busyId === app.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          approve(app.id);
                        }}
                        className="p-2 rounded-lg bg-pink text-black hover:opacity-90 disabled:opacity-50"
                      >
                        <Check className="w-4 h-4" />
                      </button>
                      <button
                        disabled={busyId === app.id}
                        onClick={(e) => {
                          e.stopPropagation();
                          reject(app.id);
                        }}
                        className="p-2 rounded-lg border border-border text-white hover:border-red-400 hover:text-red-400 disabled:opacity-50"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {expandedId === app.id && (
              <div className="border-t border-border">
                <div className="p-6 bg-muted/5">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-caps text-xs text-muted mb-3">Contact</h4>
                      <div className="space-y-2 text-sm">
                        <a
                          href={`mailto:${app.email}`}
                          className="flex items-center gap-2 text-white/80 hover:text-pink"
                        >
                          <Mail className="w-4 h-4" /> {app.email}
                        </a>
                        <a
                          href={`tel:${app.phone}`}
                          className="flex items-center gap-2 text-white/80 hover:text-pink"
                        >
                          <Phone className="w-4 h-4" /> {app.phone}
                        </a>
                        {(() => {
                          const url = socialUrl(app.social_platform, app.social_handle);
                          if (!url) return null;
                          const label =
                            app.social_platform === "linkedin"
                              ? "LinkedIn"
                              : "Instagram";
                          return (
                            <a
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-white/80 hover:text-pink"
                            >
                              <ExternalLink className="w-4 h-4" /> {label}:{" "}
                              {app.social_handle}
                            </a>
                          );
                        })()}
                        {app.address && (
                          <p className="text-white/70 pt-1">{app.address}</p>
                        )}
                        {app.birthday && (
                          <p className="text-muted">
                            Born{" "}
                            {new Date(app.birthday).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-caps text-xs text-muted mb-3">
                        Professional
                      </h4>
                      <div className="space-y-1 text-sm text-white/70">
                        <p>{app.title || "—"}{app.company ? ` · ${app.company}` : ""}</p>
                        <p>{app.industry || "Industry not specified"}</p>
                        <p className="text-muted mt-2">
                          Referral: {app.referral || "Not specified"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-caps text-xs text-muted mb-2">
                      Why they want to join
                    </h4>
                    <p className="text-sm text-white/70 whitespace-pre-line">
                      {app.why}
                    </p>
                  </div>

                  {app.contribution && (
                    <div className="mt-6">
                      <h4 className="font-caps text-xs text-muted mb-2">
                        How they&apos;ll contribute
                      </h4>
                      <p className="text-sm text-white/70 whitespace-pre-line">
                        {app.contribution}
                      </p>
                    </div>
                  )}

                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between gap-4">
                    <p className="text-xs text-muted">
                      Applied{" "}
                      {new Date(app.created_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>

                    {app.status === "pending" && (
                      <div className="flex gap-3">
                        <button
                          disabled={busyId === app.id}
                          onClick={() => reject(app.id)}
                          className="btn-outline disabled:opacity-50"
                        >
                          Reject
                        </button>
                        <button
                          disabled={busyId === app.id}
                          onClick={() => approve(app.id)}
                          className="btn-primary disabled:opacity-50"
                        >
                          Approve
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {!loading && filtered.length === 0 && (
        <div className="text-center py-12 text-muted font-body text-sm">
          No applications found.
        </div>
      )}
    </div>
  );
}
