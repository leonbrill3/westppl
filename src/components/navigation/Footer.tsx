import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WestPplLogoSmall } from "@/components/icons/WestPplLogo";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

const footerColumns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Community",
    links: [
      { label: "West Ave Miami", href: "/community/miami" },
      { label: "West Hollywood", href: "/community/la" },
      { label: "West Village NYC", href: "/community/nyc" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Experiences", href: "/experiences" },
      { label: "Marketplace", href: "/marketplace" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Join Us", href: "/apply" },
    ],
  },
];

/** Site-wide footer. Single source of truth — used by every page via PageShell. */
export function Footer() {
  return (
    <footer className="bg-black border-t border-border py-16 px-6 md:px-10 lg:px-16 xl:px-24">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <WestPplLogoSmall className="h-10 w-auto text-white" />
            </Link>
            <p className="font-body text-sm text-white/60 mb-4">
              An elevated community for sizzling souls.
            </p>
            <p className="font-caps text-xs text-pink">
              Miami &bull; Los Angeles &bull; New York
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading} className="lg:col-span-2">
              <h4 className="font-caps text-xs text-white/40 mb-6">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-white/80 hover:text-pink transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="font-caps text-xs text-white/40 mb-6">
              Stay Connected
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 min-w-0 bg-transparent border border-border px-4 py-3 text-sm focus:outline-none focus:border-pink font-body"
              />
              <button
                aria-label="Subscribe"
                className="w-12 shrink-0 border border-border border-l-0 flex items-center justify-center hover:bg-pink hover:border-pink hover:text-white transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/westppl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/60 hover:text-pink transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
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
