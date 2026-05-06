import Image from "next/image";

export function WestPplLogo({
  className,
  variant = "white",
}: {
  className?: string;
  variant?: "white" | "black";
}) {
  return (
    <div className={`relative ${className || ""}`}>
      <Image
        src={variant === "white" ? "/logo-white.png" : "/logo-black.png"}
        alt="West PPL"
        fill
        className="object-contain"
        sizes="280px"
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
    <div className={`relative ${className || ""}`}>
      <Image
        src={variant === "white" ? "/logo-white.png" : "/logo-black.png"}
        alt="West PPL"
        fill
        className="object-contain"
        sizes="180px"
      />
    </div>
  );
}
