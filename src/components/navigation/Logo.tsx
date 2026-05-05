"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export function Logo({ className, variant = "dark" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-editorial text-2xl tracking-wide flex items-center gap-2",
        variant === "light" ? "text-white" : "text-foreground",
        className
      )}
    >
      <span>west</span>
      <span className="text-muted">/</span>
      <span>ppl</span>
      {/* Flamingo placeholder - will be replaced with actual icon */}
      <FlamingoIcon className={cn(
        "w-5 h-5 ml-1",
        variant === "light" ? "text-pink-400" : "text-pink-500"
      )} />
    </Link>
  );
}

function FlamingoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("transform rotate-180", className)}
    >
      {/* Simplified flamingo silhouette - upside down */}
      <path d="M12 2C10.5 2 9.5 3 9.5 4.5C9.5 5.5 10 6.5 10.5 7C10 8 9 10 9 12C9 14 10 16 10 18C10 19 9.5 20 9 21C9 21.5 9.5 22 10 22C11 22 12 21 12 19C12 17 11 15 11 13C11 11 12 9 13 7.5C13.5 7 14 6 14 5C14 3.5 13 2 12 2Z" />
      <circle cx="12" cy="4" r="1.5" />
    </svg>
  );
}
