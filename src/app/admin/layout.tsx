"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
import { createClient } from "@/lib/supabase/client";
import { useCurrentMember } from "@/lib/hooks/useCurrentMember";

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
  const router = useRouter();
  const { member, loading } = useCurrentMember();

  // Admin-only gate. Middleware already requires a session for /admin; this
  // additionally enforces the is_admin flag and bounces non-admins.
  useEffect(() => {
    if (!loading && member && !member.isAdmin) {
      router.replace("/dashboard");
    }
  }, [loading, member, router]);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  if (loading || !member?.isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-caps text-xs text-muted">Loading…</p>
      </div>
    );
  }

  const isActive = (href: string) =>
    pathname === href || (href !== "/admin" && pathname.startsWith(href));

  return (
    <div className="min-h-screen bg-background lg:flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 shrink-0 border-r border-border bg-background flex-col">
        <div className="p-6 border-b border-border">
          <Link href="/admin">
            <Logo className="h-6" />
          </Link>
          <p className="text-xs text-muted mt-2">Admin Panel</p>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive(item.href)
                      ? "bg-foreground text-background"
                      : "text-muted hover:text-foreground hover:bg-muted/10"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-border">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-muted hover:text-foreground hover:bg-muted/10 w-full transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="lg:hidden border-b border-border">
        <div className="flex items-center justify-between p-4">
          <Link href="/admin">
            <Logo className="h-5" />
          </Link>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-xs font-caps text-muted hover:text-foreground transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
        <nav className="flex gap-1 overflow-x-auto no-scrollbar px-3 pb-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs whitespace-nowrap shrink-0 transition-colors ${
                isActive(item.href)
                  ? "bg-foreground text-background"
                  : "text-muted hover:text-foreground hover:bg-muted/10"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 min-w-0 overflow-auto">
        <div className="p-5 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
