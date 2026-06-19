"use client";

import { Header } from "@/components/navigation/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function PartnershipsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-24 lg:pt-32 pb-24 px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="font-caps text-muted">Partnerships</span>
            <h1 className="font-headline text-6xl lg:text-7xl mt-4">
              Partner With West
            </h1>
            <p className="font-body text-xl text-muted mt-6">
              We collaborate with brands and businesses that share our commitment to excellence.
              From hotels to fashion houses, our partners gain access to our discerning member community.
            </p>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {["Hotels & Resorts", "Restaurants & Dining", "Fashion & Luxury", "Wellness & Spa"].map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-border p-8"
              >
                <h3 className="font-headline text-2xl">{category}</h3>
                <p className="font-body text-muted mt-4">
                  Connect with our members through curated experiences and exclusive access.
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Become a Partner
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[1600px] mx-auto text-center">
          <Link href="/" className="font-headline text-2xl">WEST</Link>
          <p className="font-caps text-subtle mt-4">&copy; 2025 West Ave Group.</p>
        </div>
      </footer>
    </main>
  );
}
