"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Search } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const menuItems = [
  { label: "EVENTS", href: "/events" },
  { label: "CULTURE", href: "/culture" },
  { label: "PEOPLE", href: "/people" },
  { label: "WEST NIGHTS", href: "/west-nights" },
  { label: "CHAPTERS", href: "/chapters", hasSubmenu: true },
];

const chapterItems = [
  { label: "Miami", href: "/miami" },
  { label: "Los Angeles", href: "/la" },
  { label: "New York", href: "/nyc" },
];

const footerLinks = [
  { label: "ABOUT", href: "/about" },
  { label: "APPLY", href: "/apply" },
  { label: "SPONSORS", href: "/sponsors" },
  { label: "TERMS", href: "/terms" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [showChapters, setShowChapters] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-background"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <Logo />
            <div className="flex items-center gap-4">
              <button className="p-2 hover:opacity-70 transition-opacity">
                <Search className="w-6 h-6" />
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:opacity-70 transition-opacity"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="px-6 py-8">
            <ul className="space-y-6">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.hasSubmenu ? (
                    <div>
                      <button
                        onClick={() => setShowChapters(!showChapters)}
                        className="font-display text-4xl md:text-5xl tracking-tight hover:opacity-70 transition-opacity flex items-center gap-2"
                      >
                        {item.label}
                        <motion.span
                          animate={{ rotate: showChapters ? 180 : 0 }}
                          className="text-2xl"
                        >
                          ↓
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {showChapters && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="ml-4 mt-4 space-y-3 overflow-hidden"
                          >
                            {chapterItems.map((chapter) => (
                              <li key={chapter.label}>
                                <Link
                                  href={chapter.href}
                                  onClick={onClose}
                                  className="font-display text-2xl text-muted hover:text-foreground transition-colors"
                                >
                                  → {chapter.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="font-display text-4xl md:text-5xl tracking-tight hover:opacity-70 transition-opacity"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Footer Links */}
          <div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-border">
            <div className="grid grid-cols-2 gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className="text-sm font-medium text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
