"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Community", href: "/community" },
  { label: "Experiences", href: "/experiences" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Flamingo SVG Icon
function FlamingoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 32"
      className={className}
      fill="currentColor"
    >
      <path d="M12 0C10.5 0 9.2 1.2 9 2.7C8.8 4 9.5 5.2 10.5 5.8C10.2 6.5 9.8 7.5 9.2 8.5C8.2 10.2 6.8 12 5.5 14C4 16.2 3 18.5 3 21C3 24 4.5 26.5 7 28C7 29.5 7.5 31 8 32H10C9.5 30.5 9 29 9 28C10 28.5 11 28.8 12 28.8C13 28.8 14 28.5 15 28C15 29 14.5 30.5 14 32H16C16.5 31 17 29.5 17 28C19.5 26.5 21 24 21 21C21 18.5 20 16.2 18.5 14C17.2 12 15.8 10.2 14.8 8.5C14.2 7.5 13.8 6.5 13.5 5.8C14.5 5.2 15.2 4 15 2.7C14.8 1.2 13.5 0 12 0ZM12 3C12.5 3 13 3.4 13 4C13 4.6 12.5 5 12 5C11.5 5 11 4.6 11 4C11 3.4 11.5 3 12 3Z" />
    </svg>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-nav border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="font-headline text-2xl lg:text-3xl text-white tracking-wide">
                west
              </span>
              <FlamingoIcon className="w-5 h-6 lg:w-6 lg:h-7 text-pink" />
              <span className="font-headline text-2xl lg:text-3xl text-white tracking-wide">
                ppl
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-caps text-xs text-white/80 hover:text-pink transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="hidden lg:inline-flex font-caps text-xs text-white/80 hover:text-pink transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/apply"
                className="hidden lg:inline-flex btn-primary text-xs py-2 px-4"
              >
                Join
              </Link>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-white hover:text-pink transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-black border-l border-border"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="font-headline text-xl text-white">west</span>
                  <FlamingoIcon className="w-4 h-5 text-pink" />
                  <span className="font-headline text-xl text-white">ppl</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white hover:text-pink transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="p-6">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-3 font-headline text-3xl text-white hover:text-pink transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border space-y-3">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-outline w-full"
                >
                  Sign In
                </Link>
                <Link
                  href="/apply"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full"
                >
                  Join West Ppl
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
