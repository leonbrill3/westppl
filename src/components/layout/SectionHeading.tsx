import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Small pink caps label above the title. */
  eyebrow?: string;
  title: string;
  /** Optional supporting copy below the title. */
  description?: string;
  align?: "left" | "center";
  /** Optional "View All"-style link rendered to the right (left align only). */
  action?: { href: string; label: string };
  className?: string;
};

/**
 * Consistent section header: pink eyebrow + condensed headline, with an
 * optional inline action link. Matches the home page section pattern.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        action && "flex items-end justify-between gap-6",
        className
      )}
    >
      <div className={cn(align === "center" && "mx-auto max-w-2xl")}>
        {eyebrow && (
          <p className="font-caps text-sm text-pink mb-2">{eyebrow}</p>
        )}
        <h2 className="font-headline text-3xl lg:text-4xl">{title}</h2>
        {description && (
          <p className="font-body text-white/60 mt-4 max-w-2xl">{description}</p>
        )}
      </div>

      {action && (
        <Link
          href={action.href}
          className="font-caps text-sm flex items-center gap-2 text-white/60 hover:text-pink transition-colors shrink-0"
        >
          {action.label} <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
