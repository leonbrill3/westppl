import Image from "next/image";

export function WestPplLogo({
  className,
  variant = "white",
}: {
  className?: string;
  variant?: "white" | "black";
}) {
  return (
    <Image
      src={variant === "white" ? "/logo-white.png" : "/logo-black.png"}
      alt="West PPL"
      width={280}
      height={80}
      className={className}
      priority
    />
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
    <Image
      src={variant === "white" ? "/logo-white.png" : "/logo-black.png"}
      alt="West PPL"
      width={180}
      height={50}
      className={className}
    />
  );
}
