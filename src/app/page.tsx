"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { WestPplLogo, WestPplLogoSmall } from "@/components/icons/WestPplLogo";

// Communities
const communities = [
  {
    id: "miami",
    name: "West Ave Miami",
    location: "Miami, Florida",
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80",
  },
  {
    id: "la",
    name: "West Hollywood",
    location: "California",
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?w=800&q=80",
  },
  {
    id: "nyc",
    name: "West Village",
    location: "New York",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80",
  },
];

// Concierge Categories
const conciergeCategories = [
  {
    id: "travel",
    title: "Travel",
    description: "Curated getaways & experiences",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
  },
  {
    id: "dining",
    title: "Dining",
    description: "Reservations & exclusive access",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    id: "wellness",
    title: "Wellness",
    description: "Mind, body & soul",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  },
  {
    id: "events",
    title: "Events",
    description: "VIP access & experiences",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
  },
];

// Curated Experiences
const experiences = [
  {
    id: 1,
    title: "Coachella 2025",
    subtitle: "VIP Access Package",
    date: "Apr 11-13",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
  },
  {
    id: 2,
    title: "Amalfi Coast",
    subtitle: "Private Villa Experience",
    date: "May 22-26",
    image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?w=800&q=80",
  },
  {
    id: 3,
    title: "Paris Fashion Week",
    subtitle: "Backstage Access",
    date: "Jul 7-10",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

// Flamingo Icon (kept for small accent uses)
function FlamingoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 45"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Flamingo body - teardrop shape */}
      <path
        d="M10 0 C4 8, 4 16, 10 24 C16 16, 16 8, 10 0 Z"
        fill="currentColor"
      />
      {/* Flamingo curved neck */}
      <path
        d="M10 24 Q8 32, 6 38 Q4 44, 2 48"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Flamingo foot curl */}
      <path
        d="M2 48 Q0 52, 4 54"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80"
            alt="West PPL Community"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <div className="flex items-center justify-center mb-8">
              <WestPplLogo className="h-16 lg:h-24 w-auto" />
            </div>

            {/* Tagline */}
            <p className="font-body text-lg lg:text-xl text-white/80 mb-4 max-w-2xl mx-auto">
              An elevated community for sizzling souls to build lasting friendships, curate epic experiences, and share fun events.
            </p>

            {/* Communities */}
            <p className="font-caps text-sm text-pink mb-10">
              Miami &bull; Los Angeles &bull; New York
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="btn-primary">
                Join the Community
              </Link>
              <Link href="/experiences" className="btn-outline">
                Explore Experiences
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 lg:px-12 border-t border-border">
        <div className="max-w-[1200px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FlamingoIcon className="w-8 h-10 text-pink mx-auto mb-6" />
            <h2 className="font-headline text-4xl lg:text-5xl mb-6">Our Mission</h2>
            <p className="font-body text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              West Ppl is an elevated community for sizzling souls to build lasting friendships,
              curate epic experiences, and share fun events in Miami and beyond. We bring together
              creative minds, entrepreneurs, and tastemakers who want more from their social circle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Communities Section */}
      <section className="py-24 px-6 lg:px-12 bg-dark-gray">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-caps text-sm text-pink mb-2">Our Communities</h2>
              <p className="font-headline text-3xl lg:text-4xl">Where We Gather</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {communities.map((community, i) => (
              <motion.div
                key={community.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/community/${community.id}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden mb-4">
                    <Image
                      src={community.image}
                      alt={community.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-headline text-2xl text-white mb-1">{community.name}</h3>
                      <p className="font-caps text-xs text-white/70">{community.location}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge Marketplace */}
      <section className="py-24 px-6 lg:px-12 border-t border-border">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-caps text-sm text-pink mb-2">Concierge Marketplace</h2>
              <p className="font-headline text-3xl lg:text-4xl">Your Personal Concierge</p>
            </div>
            <Link href="/marketplace" className="font-caps text-sm flex items-center gap-2 text-white/60 hover:text-pink transition-colors">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {conciergeCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/marketplace/${cat.id}`} className="group block">
                  <div className="relative aspect-square overflow-hidden mb-4">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                      <h3 className="font-headline text-2xl text-white mb-2">{cat.title}</h3>
                      <p className="font-caps text-[10px] text-white/70">{cat.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Experiences */}
      <section className="py-24 px-6 lg:px-12 bg-dark-gray">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Column - Title */}
            <div className="lg:col-span-4">
              <h2 className="font-caps text-sm text-pink mb-2">Curated Experiences</h2>
              <p className="font-headline text-3xl lg:text-4xl mb-6">Epic Moments Await</p>
              <p className="font-body text-white/60 mb-8">
                Exclusive access to the world&apos;s most sought-after events, destinations, and moments. By invitation only.
              </p>
              <Link href="/experiences" className="btn-pink inline-flex">
                Discover Experiences
              </Link>
            </div>

            {/* Right Column - Cards */}
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-3 gap-4">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href={`/experiences/${exp.id}`} className="group block">
                      <div className="relative aspect-[3/4] overflow-hidden mb-4">
                        <Image
                          src={exp.image}
                          alt={exp.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="font-caps text-[10px] text-pink mb-1">{exp.date}</p>
                          <h3 className="font-headline text-xl text-white mb-1">{exp.title}</h3>
                          <p className="font-caps text-[10px] text-white/60">{exp.subtitle}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1600&q=80"
            alt="Join West PPL"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <FlamingoIcon className="w-10 h-12 text-pink mb-6" />
            <h2 className="font-headline text-5xl lg:text-6xl mb-6">
              Ready to Join?
            </h2>
            <p className="font-body text-lg text-white/70 mb-8">
              Become part of an elevated community of sizzling souls. Apply for membership and start curating your epic experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/apply" className="btn-primary">
                Apply for Membership
              </Link>
              <Link href="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-border py-16 px-6 lg:px-12">
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

            {/* Community Links */}
            <div className="lg:col-span-2">
              <h4 className="font-caps text-xs text-white/40 mb-6">Community</h4>
              <ul className="space-y-3">
                <li><Link href="/community/miami" className="font-body text-sm text-white/80 hover:text-pink transition-colors">West Ave Miami</Link></li>
                <li><Link href="/community/la" className="font-body text-sm text-white/80 hover:text-pink transition-colors">West Hollywood</Link></li>
                <li><Link href="/community/nyc" className="font-body text-sm text-white/80 hover:text-pink transition-colors">West Village NYC</Link></li>
              </ul>
            </div>

            {/* Explore Links */}
            <div className="lg:col-span-2">
              <h4 className="font-caps text-xs text-white/40 mb-6">Explore</h4>
              <ul className="space-y-3">
                <li><Link href="/experiences" className="font-body text-sm text-white/80 hover:text-pink transition-colors">Experiences</Link></li>
                <li><Link href="/marketplace" className="font-body text-sm text-white/80 hover:text-pink transition-colors">Marketplace</Link></li>
                <li><Link href="/events" className="font-body text-sm text-white/80 hover:text-pink transition-colors">Events</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-2">
              <h4 className="font-caps text-xs text-white/40 mb-6">Company</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="font-body text-sm text-white/80 hover:text-pink transition-colors">About</Link></li>
                <li><Link href="/contact" className="font-body text-sm text-white/80 hover:text-pink transition-colors">Contact</Link></li>
                <li><Link href="/apply" className="font-body text-sm text-white/80 hover:text-pink transition-colors">Join Us</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-2">
              <h4 className="font-caps text-xs text-white/40 mb-6">Stay Connected</h4>
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
                <a href="https://instagram.com/westppl" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-pink transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
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
              <Link href="/terms" className="font-caps text-xs text-white/40 hover:text-pink transition-colors">Terms</Link>
              <Link href="/privacy" className="font-caps text-xs text-white/40 hover:text-pink transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
