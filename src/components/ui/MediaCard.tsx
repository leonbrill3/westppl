import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type MediaCardProps = {
  href: string;
  image: string;
  title: string;
  /** Small pink caps label (date, category…). */
  eyebrow?: string;
  /** Secondary line under the title. */
  subtitle?: string;
  aspect?: "portrait" | "square" | "wide" | "tall";
  /** Where overlay content sits. */
  align?: "bottom" | "center";
  className?: string;
  priority?: boolean;
};

const aspects = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
  tall: "aspect-[3/4]",
};

/**
 * The signature West Ppl media card: grayscale image that desaturates +
 * zooms on hover, with a dark overlay and content. Used for communities,
 * experiences, marketplace, events, and articles.
 */
export function MediaCard({
  href,
  image,
  title,
  eyebrow,
  subtitle,
  aspect = "tall",
  align = "bottom",
  className,
  priority = false,
}: MediaCardProps) {
  return (
    <Link href={href} className={cn("group block", className)}>
      <div className={cn("relative overflow-hidden", aspects[aspect])}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          priority={priority}
        />
        <div
          className={cn(
            "absolute inset-0",
            align === "bottom"
              ? "bg-gradient-to-t from-black/80 via-black/10 to-transparent"
              : "bg-black/50 group-hover:bg-black/30 transition-colors"
          )}
        />
        <div
          className={cn(
            "absolute inset-0 p-5 flex flex-col",
            align === "bottom"
              ? "justify-end"
              : "items-center justify-center text-center"
          )}
        >
          {eyebrow && (
            <p className="font-caps text-[10px] text-pink mb-1">{eyebrow}</p>
          )}
          <h3 className="font-headline text-xl text-white">{title}</h3>
          {subtitle && (
            <p className="font-caps text-[10px] text-white/60 mt-1">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
