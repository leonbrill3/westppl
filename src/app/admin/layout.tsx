"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Calendar,
  Users,
  FileText,
  ClipboardList,
  Settings,
  LogOut,
} from "lucide-react";
import { Logo } from "@/components/navigation/Logo";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/events", label: "Events", icon: Calendar },
  { href: "/admin/members", label: "Members", icon: Users },
  { href: "/admin/applications", label: "Applications", icon: ClipboardList },
  { href: "/admin/articles", label: "Articles", icon: FileText },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-background flex flex-col">
        <div className="p-6 border-b border-border">
          <Link href="/admin">
            <Logo className="h-6" />
          </Link>
          <p className="text-xs text-muted mt-2">Admin Panel</p>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/admin" && pathname.startsWith(item.href));

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? "bg-foreground text-background"
                        : "text-muted hover:text-foreground hover:bg-muted/10"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-border">
          <button className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-muted hover:text-foreground hover:bg-muted/10 w-full transition-colors">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
