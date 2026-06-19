import { cn } from "@/lib/utils";
import { CHAPTERS, type Chapter } from "@/types";

type MemberCardProps = {
  name?: string;
  cardNumber?: string;
  chapter?: Chapter;
  /** Membership level label, e.g. "Member" or "Founding". */
  tier?: string;
  className?: string;
};

/**
 * The "metal" West Ppl member card — a brushed-steel look with a pink sheen.
 * Presentational only: pass real member data on the dashboard, or leave the
 * defaults for the marketing showcase.
 */
export function MemberCard({
  name = "Your Name",
  cardNumber,
  chapter,
  tier = "Member",
  className,
}: MemberCardProps) {
  const chapterLabel = chapter ? CHAPTERS[chapter].fullName : "Miami · LA · NYC";
  const passNumber = cardNumber ?? "Pending Activation";

  return (
    <div
      className={cn(
        "relative aspect-[1.586/1] w-full overflow-hidden rounded-2xl",
        "bg-gradient-to-br from-[#3a3a3a] via-[#222222] to-[#0e0e0e]",
        "border border-white/15 shadow-2xl",
        className
      )}
    >
      {/* Metallic diagonal sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
      {/* Pink glow accent */}
      <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-pink/20 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6 lg:p-7">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-1">
            <span className="font-headline text-2xl text-white">WEST</span>
            <span className="font-caps text-[8px] text-white/50 mt-1">PPL</span>
          </div>
          <span className="font-caps text-[10px] text-pink">{tier}</span>
        </div>

        {/* Chip */}
        <div className="h-8 w-11 rounded-md bg-gradient-to-br from-[#d9b46a] to-[#a67c2e] opacity-90" />

        {/* Bottom row */}
        <div>
          <p className="font-caps text-[10px] tracking-widest text-white/50 mb-1">
            {passNumber}
          </p>
          <div className="flex items-end justify-between gap-4">
            <span className="font-caps text-sm text-white truncate">{name}</span>
            <span className="font-caps text-[10px] text-white/50 shrink-0">
              {chapterLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
