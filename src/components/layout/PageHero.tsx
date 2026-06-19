import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

/**
 * Standard interior-page hero (Apply, About, Experiences, etc.):
 * pink eyebrow, large condensed headline, optional supporting line.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "pt-24 lg:pt-32 pb-12 px-6 md:px-10 lg:px-16 xl:px-24",
        className
      )}
    >
      <div className="max-w-[1600px] mx-auto">
        <FadeIn
          onView={false}
          className={cn(
            "max-w-2xl",
            align === "center" && "text-center mx-auto"
          )}
        >
          {eyebrow && <span className="font-caps text-muted">{eyebrow}</span>}
          <h1 className="font-headline text-6xl lg:text-7xl mt-4">{title}</h1>
          {subtitle && (
            <p className="font-body text-xl text-muted mt-6">{subtitle}</p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
