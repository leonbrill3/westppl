import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PillProps = {
  children: ReactNode;
  /** Visual tone. */
  variant?: "pink" | "outline" | "solid" | "muted";
  className?: string;
};

const variants = {
  pink: "bg-pink/15 text-pink",
  outline: "border border-border text-white/80",
  solid: "bg-white text-black",
  muted: "bg-white/10 text-white/70",
};

/**
 * Small uppercase tag/label — category chips, status badges, metadata.
 */
export function Pill({ children, variant = "pink", className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-caps text-[10px] px-3 py-1 leading-none",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
