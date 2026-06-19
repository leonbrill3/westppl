"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  /** Stagger delay in seconds (e.g. index * 0.1). */
  delay?: number;
  /** Travel distance on the Y axis before settling. */
  y?: number;
  /** Animate on scroll-into-view (default) vs immediately on mount. */
  onView?: boolean;
  className?: string;
};

/**
 * Standard entrance animation used across the site: fade + rise.
 * Wraps the repeated framer-motion initial/whileInView/viewport pattern.
 */
export function FadeIn({
  children,
  delay = 0,
  y = 20,
  onView = true,
  className,
}: FadeInProps) {
  const animateProps = onView
    ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" } }
    : { animate: { opacity: 1, y: 0 } };

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
      {...animateProps}
    >
      {children}
    </motion.div>
  );
}
