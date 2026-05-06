"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

// Concierge Categories
const conciergeCategories = [
  {
    id: "travel",
    title: "TRAVEL",
    subtitle: "CURATED GETAWAYS",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
  },
  {
    id: "dining",
    title: "DINING",
    subtitle: "RESERVATIONS & ACCESS",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    id: "fashion",
    title: "FASHION",
    subtitle: "PERSONAL SHOPPING",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "wellness",
    title: "WELLNESS",
    subtitle: "MIND & BODY",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
  },
  {
    id: "home",
    title: "HOME",
    subtitle: "DESIGN & SERVICES",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
];

// Curated Experiences
const experiences = [
  {
    id: 1,
    category: "FEATURED",
    title: "Coachella 2025",
    subtitle: "VIP ACCESS PACKAGES",
    date: "APR 11 - 13",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
  },
  {
    id: 2,
    category: "TRAVEL",
    title: "Amalfi Coast Escape",
    subtitle: "PRIVATE VILLA EXPERIENCE",
    date: "MAY 22 - 26",
    image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?w=800&q=80",
  },
  {
    id: 3,
    category: "FASHION",
    title: "Paris Couture Week",
    subtitle: "BACKSTAGE ACCESS",
    date: "JUL 7 - 10",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

// Magazine Articles
const articles = [
  {
    id: 1,
    category: "BEAUTY",
    title: "The New Era of Conscious Beauty",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
  },
  {
    id: 2,
    category: "TRAVEL",
    title: "Where to Go Next: Our Summer Edit",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
  },
  {
    id: 3,
    category: "FASHION",
    title: "Quiet Luxury, Loud Impact",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
  },
  {
    id: 4,
    category: "DESIGN",
    title: "Inside the Minds of Leading Designers",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
];

export default function Home() {
  const [experienceIndex, setExperienceIndex] = useState(0);
  const experiencesRef = useRef<HTMLDivElement>(null);

  const nextExperience = () => {
    setExperienceIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setExperienceIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Split Layout */}
      <section className="pt-20 lg:pt-0 min-h-screen flex flex-col lg:flex-row">
        {/* Left - Text */}
        <div className="lg:w-1/2 flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-headline text-[clamp(3rem,8vw,6rem)] leading-[0.9] mb-8">
              WELCOME<br />TO WEST.
            </h1>
            <p className="font-caps text-muted mb-8 max-w-md">
              THE MEMBERS PLATFORM BY WEST AVE GROUP.<br />
              EXCLUSIVE ACCESS. CURATED EXPERIENCES.<br />
              ELEVATED LIVING.
            </p>
            <Link href="/marketplace" className="btn-outline inline-flex">
              EXPLORE CONCIERGE
            </Link>
          </motion.div>
        </div>

        {/* Right - Image */}
        <div className="lg:w-1/2 relative min-h-[50vh] lg:min-h-screen">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
            alt="West Ave Group"
            fill
            className="object-cover grayscale"
            priority
          />
        </div>
      </section>

      {/* Concierge Marketplace */}
      <section className="py-16 px-8 lg:px-16 border-t border-border">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-caps text-sm">CONCIERGE MARKETPLACE</h2>
            <Link href="/marketplace" className="font-caps text-sm flex items-center gap-2 hover:text-muted transition-colors">
              VIEW ALL <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {conciergeCategories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/marketplace/${cat.id}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="font-headline text-xl text-white mb-1">{cat.title}</h3>
                      <p className="font-caps text-[10px] text-white/70">{cat.subtitle}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Experiences */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Column - Title */}
            <div className="lg:col-span-3 flex flex-col justify-between">
              <div>
                <h2 className="font-caps text-sm text-white/60 mb-4">CURATED EXPERIENCES</h2>
                <p className="text-lg leading-relaxed mb-8">
                  Exclusive access to the world&apos;s most sought-after events, destinations, and moments.
                </p>
                <p className="font-caps text-xs text-white/60 mb-6">BY INVITATION ONLY.</p>
                <Link href="/experiences" className="btn-white inline-flex">
                  DISCOVER EXPERIENCES
                </Link>
              </div>
            </div>

            {/* Right Column - Carousel */}
            <div className="lg:col-span-9" ref={experiencesRef}>
              <div className="relative">
                <div className="flex gap-4 overflow-hidden">
                  <AnimatePresence mode="wait">
                    {experiences.map((exp, i) => (
                      <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                          opacity: i >= experienceIndex && i < experienceIndex + 3 ? 1 : 0,
                          x: 0
                        }}
                        exit={{ opacity: 0, x: -100 }}
                        className={`flex-shrink-0 w-full md:w-[calc(33.333%-1rem)] ${
                          i >= experienceIndex && i < experienceIndex + 3 ? 'block' : 'hidden md:block'
                        }`}
                      >
                        <Link href={`/experiences/${exp.id}`} className="group block">
                          <div className="relative aspect-[3/4] overflow-hidden mb-4">
                            <Image
                              src={exp.image}
                              alt={exp.title}
                              fill
                              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                          </div>
                          <p className="font-caps text-[10px] text-taupe mb-2">{exp.category}</p>
                          <h3 className="font-headline text-2xl mb-1">{exp.title}</h3>
                          <p className="font-caps text-xs text-white/60 mb-1">{exp.subtitle}</p>
                          <p className="font-caps text-xs text-white/40">{exp.date}</p>
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-2 mt-8 justify-end">
                  <button
                    onClick={prevExperience}
                    className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextExperience}
                    className="w-10 h-10 border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* West Mag Section */}
      <section className="py-16 px-8 lg:px-16 border-t border-border">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left - Title */}
            <div className="lg:col-span-2">
              <h2 className="font-headline text-4xl mb-4">WEST MAG</h2>
              <p className="text-muted mb-6">Stories that inspire, connect, and elevate.</p>
              <Link href="/magazine" className="btn-outline inline-flex">
                READ THE LATEST
              </Link>
            </div>

            {/* Right - Articles Grid */}
            <div className="lg:col-span-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {articles.map((article, i) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href={`/magazine/${article.id}`} className="group block">
                      <div className="relative aspect-[3/4] overflow-hidden mb-4">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      <p className="font-caps text-[10px] text-muted mb-2">{article.category}</p>
                      <h3 className="text-sm leading-snug">{article.title}</h3>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16 px-8 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            {/* Logo & Tagline */}
            <div className="lg:col-span-3">
              <Link href="/" className="block mb-4">
                <span className="font-headline text-3xl">WEST AVE</span>
                <span className="font-headline text-3xl block">GROUP</span>
              </Link>
              <p className="font-caps text-xs text-white/60 mb-2">BUILDING CULTURE.</p>
              <p className="font-caps text-xs text-white/60">ELEVATING LIFESTYLE.</p>
            </div>

            {/* Members Links */}
            <div className="lg:col-span-2">
              <h4 className="font-caps text-xs text-white/60 mb-6">MEMBERS</h4>
              <ul className="space-y-3">
                <li><Link href="/dashboard" className="text-sm hover:text-white/60 transition-colors">Dashboard</Link></li>
                <li><Link href="/dashboard/profile" className="text-sm hover:text-white/60 transition-colors">Profile</Link></li>
                <li><Link href="/dashboard/preferences" className="text-sm hover:text-white/60 transition-colors">Preferences</Link></li>
                <li><Link href="/dashboard/bookings" className="text-sm hover:text-white/60 transition-colors">Bookings</Link></li>
                <li><Link href="/dashboard/wallet" className="text-sm hover:text-white/60 transition-colors">Wallet</Link></li>
              </ul>
            </div>

            {/* Concierge Links */}
            <div className="lg:col-span-2">
              <h4 className="font-caps text-xs text-white/60 mb-6">CONCIERGE</h4>
              <ul className="space-y-3">
                <li><Link href="/marketplace" className="text-sm hover:text-white/60 transition-colors">Request Something</Link></li>
                <li><Link href="/dashboard/requests" className="text-sm hover:text-white/60 transition-colors">My Requests</Link></li>
                <li><Link href="/dashboard/favorites" className="text-sm hover:text-white/60 transition-colors">Favorites</Link></li>
                <li><Link href="/support" className="text-sm hover:text-white/60 transition-colors">Support</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-2">
              <h4 className="font-caps text-xs text-white/60 mb-6">COMPANY</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-sm hover:text-white/60 transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="text-sm hover:text-white/60 transition-colors">Careers</Link></li>
                <li><Link href="/partnerships" className="text-sm hover:text-white/60 transition-colors">Partnerships</Link></li>
                <li><Link href="/press" className="text-sm hover:text-white/60 transition-colors">Press</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-3">
              <h4 className="font-caps text-xs text-white/60 mb-6">STAY CONNECTED</h4>
              <p className="text-sm text-white/80 mb-4">Curated inspiration, delivered to you.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent border border-white/30 px-4 py-3 text-sm focus:outline-none focus:border-white"
                />
                <button className="w-12 border border-white/30 border-l-0 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex gap-4 mt-6">
                <a href="https://instagram.com/westavegroup" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a href="https://facebook.com/westavegroup" target="_blank" rel="noopener noreferrer" className="hover:text-white/60 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="mailto:hello@westavegroup.com" className="hover:text-white/60 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-caps text-xs text-white/40">
              &copy; {new Date().getFullYear()} WEST AVE GROUP. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8">
              <Link href="/terms" className="font-caps text-xs text-white/40 hover:text-white/60 transition-colors">TERMS OF SERVICE</Link>
              <Link href="/privacy" className="font-caps text-xs text-white/40 hover:text-white/60 transition-colors">PRIVACY POLICY</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
