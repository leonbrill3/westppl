"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, variant = "dark", size = "md" }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "font-editorial tracking-tight flex items-center gap-1 transition-opacity hover:opacity-70",
        {
          "text-white": variant === "light",
          "text-foreground": variant === "dark",
          "text-xl": size === "sm",
          "text-2xl": size === "md",
          "text-3xl": size === "lg",
        },
        className
      )}
    >
      <span className="font-medium">west</span>
      <span className="text-muted/50">/</span>
      <span className="font-medium">ppl</span>
    </Link>
  );
}
