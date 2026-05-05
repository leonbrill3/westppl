"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ArrowRight, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Logo } from "./Logo";
import { CHAPTERS } from "@/types";

const menuItems = [
  { label: "Events", href: "/events" },
  { label: "Culture", href: "/culture" },
  { label: "About", href: "/about" },
  { label: "Apply", href: "/apply", highlight: true },
];

const chapters = Object.values(CHAPTERS);

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-background shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <Logo size="sm" />
              <button
                onClick={onClose}
                className="p-2 -mr-2 hover:bg-foreground/5 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Navigation */}
            <nav className="px-6 py-8">
              <ul className="space-y-1">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between py-4 text-2xl font-editorial transition-colors ${
                        item.highlight
                          ? "text-accent hover:text-accent-dark"
                          : "text-foreground hover:text-muted"
                      }`}
                    >
                      {item.label}
                      <ArrowRight className="w-5 h-5 opacity-30" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Chapters */}
            <div className="px-6 py-6 border-t border-border">
              <p className="font-caps text-muted mb-4">Chapters</p>
              <div className="grid grid-cols-3 gap-3">
                {chapters.map((chapter) => (
                  <Link
                    key={chapter.id}
                    href={`/${chapter.id}`}
                    onClick={onClose}
                    className="group p-4 bg-cream rounded-lg hover:bg-sand transition-colors"
                  >
                    <MapPin
                      className="w-4 h-4 mb-2 transition-colors"
                      style={{ color: chapter.color }}
                    />
                    <p className="text-sm font-medium">{chapter.name}</p>
                    <p className="text-xs text-muted">{chapter.fullName}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-border bg-cream">
              <div className="flex items-center justify-between">
                <Link
                  href="/login"
                  onClick={onClose}
                  className="text-sm font-medium hover:text-muted transition-colors"
                >
                  Member Login
                </Link>
                <a
                  href="https://instagram.com/westppl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-sand rounded-full transition-colors"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
