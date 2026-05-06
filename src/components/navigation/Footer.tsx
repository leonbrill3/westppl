"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WestPplLogoSmall } from "@/components/icons/WestPplLogo";

export function Footer() {
  return (
    <footer className="bg-black border-t border-border py-16 px-6 lg:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <WestPplLogoSmall className="h-10 w-32" />
            </Link>
            <p className="font-body text-sm text-white/60 mb-4">
              An elevated community for sizzling souls.
            </p>
            <p className="font-caps text-xs text-pink">
              Miami &bull; Los Angeles &bull; New York
            </p>
          </div>

          {/* Community Links */}
          <div className="lg:col-span-2">
            <h4 className="font-caps text-xs text-white/40 mb-6">Community</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/community/miami"
                  className="font-body text-sm text-white/80 hover:text-pink transition-colors"
                >
                  West Ave Miami
                </Link>
              </li>
              <li>
                <Link
                  href="/community/la"
                  className="font-body text-sm text-white/80 hover:text-pink transition-colors"
                >
                  West Hollywood
                </Link>
              </li>
              <li>
                <Link
                  href="/community/nyc"
                  className="font-body text-sm text-white/80 hover:text-pink transition-colors"
                >
                  West Village NYC
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2">
            <h4 className="font-caps text-xs text-white/40 mb-6">Explore</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/experiences"
                  className="font-body text-sm text-white/80 hover:text-pink transition-colors"
                >
                  Experiences
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace"
                  className="font-body text-sm text-white/80 hover:text-pink transition-colors"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="font-body text-sm text-white/80 hover:text-pink transition-colors"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="font-caps text-xs text-white/40 mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="font-body text-sm text-white/80 hover:text-pink transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-body text-sm text-white/80 hover:text-pink transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="font-body text-sm text-white/80 hover:text-pink transition-colors"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="font-caps text-xs text-white/40 mb-6">
              Stay Connected
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-pink font-body"
              />
              <button className="w-12 border border-border border-l-0 flex items-center justify-center hover:bg-pink hover:border-pink hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/westppl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-pink transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-caps text-xs text-white/40">
            &copy; {new Date().getFullYear()} West Ppl. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="/terms"
              className="font-caps text-xs text-white/40 hover:text-pink transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="font-caps text-xs text-white/40 hover:text-pink transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
