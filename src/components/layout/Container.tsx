import type { ReactNode } from "react";

/**
 * Canonical page gutter + max-width wrapper.
 * Keeps horizontal spacing consistent across the site and lets edges
 * breathe on large screens. Matches the gutter used by the Header/footer:
 * px-6 md:px-10 lg:px-16 xl:px-24, capped at max-w-[1600px].
 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 xl:px-24 ${className}`}
    >
      {children}
    </div>
  );
}
