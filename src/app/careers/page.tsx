"use client";

import { Header } from "@/components/navigation/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const openings = [
  { title: "Senior Concierge Specialist", location: "Miami, FL", type: "Full-time" },
  { title: "Content Editor", location: "Remote", type: "Full-time" },
  { title: "Experience Designer", location: "New York, NY", type: "Full-time" },
  { title: "Member Relations Manager", location: "Los Angeles, CA", type: "Full-time" },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 lg:pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="font-caps text-muted">Careers</span>
            <h1 className="font-headline text-6xl lg:text-7xl mt-4">
              Join Our Team
            </h1>
            <p className="font-body text-xl text-muted mt-6">
              We're building the future of luxury experiences. Join us in creating unforgettable moments.
            </p>
          </motion.div>

          <div className="mt-16 space-y-4">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-border p-6 hover:border-black transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="font-headline text-xl">{job.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-muted">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span className="font-caps text-xs">{job.location}</span>
                      </span>
                      <span className="font-caps text-xs">{job.type}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="btn-outline inline-flex items-center gap-2">
                    Apply
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="font-body text-muted">
              Don't see the right role? Send your resume to{" "}
              <a href="mailto:careers@westavegroup.com" className="underline">
                careers@westavegroup.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto text-center">
          <Link href="/" className="font-headline text-2xl">WEST</Link>
          <p className="font-caps text-subtle mt-4">&copy; 2025 West Ave Group.</p>
        </div>
      </footer>
    </main>
  );
}
