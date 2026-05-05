"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

interface HeaderProps {
  variant?: "light" | "dark" | "transparent";
}

export function Header({ variant = "dark" }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = variant === "transparent" && !scrolled;
  const textColor = isTransparent ? "text-white" : "text-foreground";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          {
            "bg-transparent": isTransparent,
            "bg-background/95 backdrop-blur-nav border-b border-border/50": !isTransparent,
          }
        )}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Logo variant={isTransparent ? "light" : "dark"} />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              <NavLink href="/events" className={textColor}>
                Events
              </NavLink>
              <NavLink href="/culture" className={textColor}>
                Culture
              </NavLink>
              <NavLink href="/about" className={textColor}>
                About
              </NavLink>
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-6">
              {/* Apply Button - Desktop */}
              <Link
                href="/apply"
                className={cn(
                  "hidden lg:flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300",
                  isTransparent
                    ? "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-foreground"
                    : "bg-foreground text-background hover:bg-foreground/90"
                )}
              >
                Apply
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Login Link - Desktop */}
              <Link
                href="/login"
                className={cn(
                  "hidden lg:block text-sm font-medium transition-opacity hover:opacity-70",
                  textColor
                )}
              >
                Login
              </Link>

              {/* Menu Button */}
              <button
                onClick={() => setMenuOpen(true)}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70",
                  textColor
                )}
              >
                <span className="hidden sm:inline font-caps">Menu</span>
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium link-underline transition-opacity hover:opacity-70",
        className
      )}
    >
      {children}
    </Link>
  );
}
