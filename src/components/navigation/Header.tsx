"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

interface HeaderProps {
  variant?: "light" | "dark" | "transparent";
}

export function Header({ variant = "dark" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isLight = variant === "light" || variant === "transparent";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-colors duration-300",
          {
            "bg-background border-b border-border": variant === "dark",
            "bg-white border-b border-border": variant === "light",
            "bg-transparent": variant === "transparent",
          }
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo variant={isLight && variant === "transparent" ? "light" : "dark"} />

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/events"
              className={cn(
                "text-sm font-medium hover:opacity-70 transition-opacity",
                isLight && variant === "transparent" ? "text-white" : "text-foreground"
              )}
            >
              Events
            </Link>
            <Link
              href="/culture"
              className={cn(
                "text-sm font-medium hover:opacity-70 transition-opacity",
                isLight && variant === "transparent" ? "text-white" : "text-foreground"
              )}
            >
              Culture
            </Link>
            <Link
              href="/west-nights"
              className={cn(
                "text-sm font-medium hover:opacity-70 transition-opacity",
                isLight && variant === "transparent" ? "text-white" : "text-foreground"
              )}
            >
              West Nights
            </Link>
            <Link
              href="/apply"
              className={cn(
                "text-sm font-medium px-4 py-2 rounded-full transition-all",
                isLight && variant === "transparent"
                  ? "bg-white text-foreground hover:bg-white/90"
                  : "bg-foreground text-background hover:opacity-90"
              )}
            >
              Apply
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className={cn(
              "md:hidden p-2 hover:opacity-70 transition-opacity",
              isLight && variant === "transparent" ? "text-white" : "text-foreground"
            )}
          >
            <Menu className="w-6 h-6" />
          </button>

          <button
            onClick={() => setMenuOpen(true)}
            className={cn(
              "hidden md:block text-sm font-medium hover:opacity-70 transition-opacity",
              isLight && variant === "transparent" ? "text-white" : "text-foreground"
            )}
          >
            MENU
          </button>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
