"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardNav } from "@/lib/data/dashboard-nav";
import { cn } from "@/lib/utils";

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible no-scrollbar -mx-1 lg:mx-0 px-1 lg:px-0">
      {dashboardNav.map((item) => {
        const active =
          item.href === "/dashboard"
            ? pathname === "/dashboard"
            : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 font-caps text-xs whitespace-nowrap transition-colors shrink-0",
              active
                ? "bg-dark-gray text-pink"
                : "text-white/60 hover:text-white hover:bg-dark-gray/50"
            )}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
