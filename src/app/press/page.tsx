"use client";

import { Header } from "@/components/navigation/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const pressItems = [
  { outlet: "Forbes", title: "West Ave Group Redefines Luxury Membership", date: "March 2025" },
  { outlet: "Vogue", title: "Inside the World of West", date: "February 2025" },
  { outlet: "Bloomberg", title: "The Rise of Curated Experiences", date: "January 2025" },
];

export default function PressPage() {
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
            <span className="font-caps text-muted">Press</span>
            <h1 className="font-headline text-6xl lg:text-7xl mt-4">
              In the News
            </h1>
            <p className="font-body text-xl text-muted mt-6">
              Media coverage and press resources for West Ave Group.
            </p>
          </motion.div>

          <div className="mt-16 space-y-6">
            {pressItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-border pb-6"
              >
                <span className="font-caps text-muted">{item.outlet} · {item.date}</span>
                <h3 className="font-headline text-2xl mt-2">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-dark-gray">
            <h3 className="font-headline text-2xl">Press Kit</h3>
            <p className="font-body text-muted mt-4">
              Download our press kit for logos, brand guidelines, and company information.
            </p>
            <button className="btn-primary mt-6 inline-flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Press Kit
            </button>
          </div>

          <div className="mt-8">
            <p className="font-body text-muted">
              For press inquiries, contact{" "}
              <a href="mailto:press@westavegroup.com" className="underline">
                press@westavegroup.com
              </a>
            </p>
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
