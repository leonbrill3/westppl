"use client";

import { Header } from "@/components/navigation/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "dining",
    name: "Dining",
    description: "Member tables, neighborhood favorites, and chef collaborations.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
  },
  {
    id: "wellness",
    name: "Wellness",
    description: "Studios, recovery, and trainers our members swear by.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
  },
  {
    id: "creative",
    name: "Creative Services",
    description: "Photographers, designers, and makers from within the community.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800",
  },
  {
    id: "rentals",
    name: "Stays & Rentals",
    description: "Member homes, getaways, and spaces to gather.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
  },
  {
    id: "perks",
    name: "Brand Perks",
    description: "Member pricing and access with brands that match the vibe.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
  },
  {
    id: "local",
    name: "Local Recs",
    description: "The spots, services, and people members actually trust.",
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800",
  },
];

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 font-caps text-[10px] text-pink bg-pink/15 px-3 py-1 mb-4">
              Launching Soon
            </span>
            <h1 className="font-headline text-6xl lg:text-8xl mt-2">
              The Member
              <br />
              Marketplace
            </h1>
            <p className="font-body text-xl text-muted mt-6 max-w-2xl">
              A trusted, member-powered marketplace — local recommendations,
              member offers, creative services, stays, and brand perks, all from
              within the West Ppl community. Rolling out soon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 md:px-10 lg:px-16 xl:px-24 pb-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/marketplace/${category.id}`} className="group block">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover grayscale-hover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <span className="font-caps text-[10px] text-pink">Coming Soon</span>
                      <h3 className="font-headline text-3xl text-white mt-2">
                        {category.name}
                      </h3>
                      <p className="font-body text-white/80 mt-2 line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Member-powered note */}
      <section className="bg-dark-gray py-24 px-6 md:px-10 lg:px-16 xl:px-24 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-caps text-sm text-pink">Built by Members</span>
          <h2 className="font-headline text-4xl lg:text-5xl mt-4">
            A Marketplace You Can Trust
          </h2>
          <p className="font-body text-lg text-white/60 mt-6">
            No noise, no spam — just trusted services, offers, and recommendations
            from people in the community. Want to list something when it opens?
            Your concierge can help.
          </p>
          <Link
            href="/dashboard/concierge"
            className="btn-outline mt-8 inline-flex items-center gap-2"
          >
            Ask the Concierge
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Concierge CTA */}
      <section className="py-24 px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-caps text-muted">Personal Concierge</span>
              <h2 className="font-headline text-4xl lg:text-5xl mt-4">
                Can't Find What
                <br />
                You're Looking For?
              </h2>
              <p className="font-body text-lg text-muted mt-6">
                Our concierge team specializes in sourcing the impossible.
                From sold-out events to off-market properties, we make it happen.
              </p>
              <Link href="/contact" className="btn-primary mt-8 inline-flex items-center gap-2">
                Contact Concierge
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="aspect-[4/3] relative">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                alt="Concierge Service"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[1600px] mx-auto text-center">
          <Link href="/" className="font-headline text-2xl">
            WEST
          </Link>
          <p className="font-caps text-subtle mt-4">
            &copy; 2025 West Ave Group. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
