import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  /** Vertical rhythm. */
  size?: "sm" | "md" | "lg";
  /** Background treatment. */
  bg?: "black" | "dark";
  /** Top hairline border (used to separate stacked black sections). */
  border?: boolean;
  /** Inner content max-width. */
  width?: "default" | "narrow" | "prose";
  id?: string;
  className?: string;
  containerClassName?: string;
};

const sizeY = {
  sm: "py-16",
  md: "py-24",
  lg: "py-32",
};

const maxW = {
  default: "max-w-[1600px]",
  narrow: "max-w-[1200px]",
  prose: "max-w-[800px]",
};

/**
 * Canonical page section: consistent vertical rhythm, responsive gutters, and
 * a centered max-width container. Replaces the hand-repeated
 * `py-24 px-6 md:px-10 lg:px-16 xl:px-24` + `max-w-[...] mx-auto` pattern.
 */
export function Section({
  children,
  size = "md",
  bg = "black",
  border = false,
  width = "default",
  id,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        sizeY[size],
        "px-6 md:px-10 lg:px-16 xl:px-24",
        bg === "dark" && "bg-dark-gray",
        border && "border-t border-border",
        className
      )}
    >
      <div className={cn(maxW[width], "mx-auto", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
