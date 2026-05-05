"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group",
          {
            // Primary - solid dark
            "bg-foreground text-background hover:bg-foreground/90 focus-visible:ring-foreground":
              variant === "primary",
            // Secondary - accent color
            "bg-accent text-foreground hover:bg-accent-dark focus-visible:ring-accent":
              variant === "secondary",
            // Outline - elegant border
            "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground hover:text-background focus-visible:ring-foreground":
              variant === "outline",
            // Ghost - minimal
            "text-foreground hover:bg-foreground/5 focus-visible:ring-foreground":
              variant === "ghost",
            // Link - underline style
            "text-foreground underline-offset-4 hover:underline focus-visible:ring-foreground p-0":
              variant === "link",
            // Sizes
            "text-xs px-4 py-2": size === "sm",
            "text-sm px-6 py-3": size === "md",
            "text-sm px-8 py-4": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
