"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            // Variants
            "bg-foreground text-background hover:opacity-90 focus:ring-foreground":
              variant === "primary",
            "bg-accent text-background hover:bg-accent-dark focus:ring-accent":
              variant === "secondary",
            "border-2 border-foreground text-foreground hover:bg-foreground hover:text-background focus:ring-foreground":
              variant === "outline",
            "text-foreground hover:bg-foreground/5 focus:ring-foreground":
              variant === "ghost",
            // Sizes
            "text-sm px-4 py-2 rounded": size === "sm",
            "text-base px-6 py-3 rounded-md": size === "md",
            "text-lg px-8 py-4 rounded-lg": size === "lg",
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
