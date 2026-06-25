import Image from "next/image";

export function WestPplLogo({
  className,
  variant = "white",
}: {
  className?: string;
  variant?: "white" | "black";
}) {
  return (
    <div className={className}>
      <Image
        src={variant === "white" ? "/logo-white.png" : "/logo-black.png"}
        alt="West PPL"
        width={143}
        height={98}
        className="h-full w-auto"
        // Inline style overrides the unlayered `img { height: auto }` reset in
        // globals.css, which (under Tailwind v4 cascade layers) otherwise beats
        // the `h-full` utility and collapses the logo to its intrinsic size.
        style={{ height: "100%", width: "auto" }}
        priority
      />
    </div>
  );
}

export function WestPplLogoSmall({
  className,
  variant = "white",
}: {
  className?: string;
  variant?: "white" | "black";
}) {
  return (
    <div className={className}>
      <Image
        src={variant === "white" ? "/logo-white.png" : "/logo-black.png"}
        alt="West PPL"
        width={58}
        height={40}
        className="h-full w-auto"
        // See note in WestPplLogo: defeat the global `img { height: auto }`
        // reset so the logo fills its (responsive) wrapper height.
        style={{ height: "100%", width: "auto" }}
      />
    </div>
  );
}
