"use client";

import { motion } from "framer-motion";
import { Calendar, Users, ClipboardList, TrendingUp } from "lucide-react";
import Link from "next/link";

// Mock stats - will come from Supabase
const stats = [
  { label: "Total Members", value: "1,247", change: "+12%", icon: Users },
  { label: "Active Events", value: "8", change: "+3", icon: Calendar },
  { label: "Pending Applications", value: "23", change: "New", icon: ClipboardList },
  { label: "RSVPs This Month", value: "156", change: "+28%", icon: TrendingUp },
];

const recentActivity = [
  { type: "application", text: "New application from Sarah M.", time: "5 min ago" },
  { type: "rsvp", text: "John D. RSVP'd to Sunset Rooftop Session", time: "12 min ago" },
  { type: "member", text: "Alex K. joined the LA chapter", time: "1 hour ago" },
  { type: "event", text: "New event created: Gallery Opening", time: "2 hours ago" },
  { type: "application", text: "Application approved: Mike R.", time: "3 hours ago" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-editorial text-3xl mb-2">Dashboard</h1>
        <p className="text-muted">Welcome back! Here&apos;s what&apos;s happening.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 border border-border rounded-lg"
          >
            <div className="flex items-start justify-between mb-4">
              <stat.icon className="w-5 h-5 text-muted" />
              <span className="text-xs text-green-500 font-medium">
                {stat.change}
              </span>
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="border border-border rounded-lg p-6">
          <h2 className="font-medium text-lg mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === "application"
                      ? "bg-blue-500"
                      : activity.type === "rsvp"
                      ? "bg-green-500"
                      : activity.type === "member"
                      ? "bg-purple-500"
                      : "bg-amber-500"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm">{activity.text}</p>
                  <p className="text-xs text-muted">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="border border-border rounded-lg p-6">
          <h2 className="font-medium text-lg mb-6">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/admin/events/new"
              className="p-4 border border-border rounded-lg hover:border-foreground transition-colors text-center"
            >
              <Calendar className="w-6 h-6 mx-auto mb-2 text-muted" />
              <span className="text-sm font-medium">Create Event</span>
            </Link>
            <Link
              href="/admin/applications"
              className="p-4 border border-border rounded-lg hover:border-foreground transition-colors text-center"
            >
              <ClipboardList className="w-6 h-6 mx-auto mb-2 text-muted" />
              <span className="text-sm font-medium">Review Applications</span>
            </Link>
            <Link
              href="/admin/members"
              className="p-4 border border-border rounded-lg hover:border-foreground transition-colors text-center"
            >
              <Users className="w-6 h-6 mx-auto mb-2 text-muted" />
              <span className="text-sm font-medium">Manage Members</span>
            </Link>
            <Link
              href="/admin/articles/new"
              className="p-4 border border-border rounded-lg hover:border-foreground transition-colors text-center"
            >
              <TrendingUp className="w-6 h-6 mx-auto mb-2 text-muted" />
              <span className="text-sm font-medium">Write Article</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
