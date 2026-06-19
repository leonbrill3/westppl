"use client";

import { Header } from "@/components/navigation/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const featuredExperience = {
  id: "members-trip-tulum",
  title: "Members Trip: Tulum Reset",
  location: "Tulum, Mexico",
  date: "September 2026",
  description: "A long weekend with the community — beach mornings, breathwork, and long dinners. The kind of trip that turns members into close friends.",
  image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600",
  status: "Members only · Apply to join",
};

const experiences = [
  {
    id: "long-table-supper",
    title: "Long-Table Supper",
    location: "Miami",
    date: "Jul 25, 2026",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    category: "Dinners",
  },
  {
    id: "rooftop-sessions",
    title: "Rooftop Sessions: Live Set",
    location: "Los Angeles",
    date: "Aug 2, 2026",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
    category: "Music",
  },
  {
    id: "gallery-night",
    title: "Gallery Night: New Voices",
    location: "New York",
    date: "Aug 9, 2026",
    image: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=800",
    category: "Art",
  },
  {
    id: "sunrise-breathwork",
    title: "Sunrise Breathwork & Plunge",
    location: "Miami",
    date: "Aug 16, 2026",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
    category: "Wellness",
  },
  {
    id: "nyfw-access",
    title: "NYFW Members Access",
    location: "New York",
    date: "Sep 2026",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800",
    category: "Fashion",
  },
  {
    id: "amalfi-summer",
    title: "Members Trip: Amalfi Summer",
    location: "Amalfi, Italy",
    date: "Jun 2026",
    image: "https://images.unsplash.com/photo-1534008897995-27a23e859048?w=800",
    category: "Trips",
  },
];

const categories = ["All", "Dinners", "Music", "Art", "Wellness", "Fashion", "Trips"];

export default function ExperiencesPage() {
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
            <span className="font-caps text-sm text-pink">Curated Programming</span>
            <h1 className="font-headline text-6xl lg:text-8xl mt-4">
              Things Worth
              <br />
              Showing Up For
            </h1>
            <p className="font-body text-xl text-muted mt-6 max-w-2xl">
              Members-only dinners, music nights, art previews, wellness mornings,
              and the occasional trip — across Miami, LA, and New York.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Experience */}
      <section className="px-6 md:px-10 lg:px-16 xl:px-24 pb-20">
        <div className="max-w-[1600px] mx-auto">
          <Link href={`/experiences/${featuredExperience.id}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[21/9] overflow-hidden group"
            >
              <Image
                src={featuredExperience.image}
                alt={featuredExperience.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                <span className="font-caps text-[10px] text-pink bg-pink/15 px-3 py-1 self-start">{featuredExperience.status}</span>
                <h2 className="font-headline text-4xl lg:text-6xl text-white mt-2">
                  {featuredExperience.title}
                </h2>
                <div className="flex items-center gap-6 mt-4 text-white/80">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="font-caps">{featuredExperience.location}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-caps">{featuredExperience.date}</span>
                  </span>
                </div>
                <p className="font-body text-white/90 mt-4 max-w-2xl line-clamp-2">
                  {featuredExperience.description}
                </p>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 md:px-10 lg:px-16 xl:px-24 pb-12 border-t border-border pt-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex gap-6 overflow-x-auto no-scrollbar">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`font-caps whitespace-nowrap ${
                  index === 0 ? "text-white" : "text-muted hover:text-white"
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="px-6 md:px-10 lg:px-16 xl:px-24 pb-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/experiences/${experience.id}`} className="group block">
                  <div className="aspect-[4/3] relative overflow-hidden mb-4">
                    <Image
                      src={experience.image}
                      alt={experience.title}
                      fill
                      className="object-cover grayscale-hover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="font-caps text-xs bg-black text-white px-3 py-1">
                        {experience.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline text-2xl group-hover:text-muted transition-colors">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-4 mt-2 text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span className="font-caps text-xs">{experience.location}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className="font-caps text-xs">{experience.date}</span>
                    </span>
                  </div>
                  <p className="font-caps text-xs text-pink mt-3">Members only</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Experiences CTA */}
      <section className="bg-black text-white py-24 px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-caps text-subtle">Private Experiences</span>
              <h2 className="font-headline text-4xl lg:text-5xl mt-4">
                Create Your Own
                <br />
                Experience
              </h2>
              <p className="font-body text-lg text-subtle mt-6">
                Have something specific in mind? Our experience team can design
                a bespoke journey tailored entirely to your interests.
              </p>
              <Link href="/contact" className="btn-white mt-8 inline-flex items-center gap-2">
                Plan Custom Experience
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="aspect-square relative">
              <Image
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800"
                alt="Custom Experience"
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
