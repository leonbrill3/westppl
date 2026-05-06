"use client";

import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const featuredExperience = {
  id: "tuscany-harvest",
  title: "Tuscan Harvest Experience",
  location: "Tuscany, Italy",
  date: "October 15-22, 2025",
  description: "Seven days immersed in the traditions of Tuscan winemaking. Private vineyard tours, hands-on harvest, and dinners with legendary producers.",
  image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1600",
  price: "$18,500",
  spots: "8 spots remaining",
};

const experiences = [
  {
    id: "tokyo-culinary",
    title: "Tokyo Culinary Journey",
    location: "Tokyo, Japan",
    date: "May 2025",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
    price: "$12,500",
    category: "Culinary",
  },
  {
    id: "art-basel",
    title: "Art Basel Private Preview",
    location: "Basel, Switzerland",
    date: "June 2025",
    image: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=800",
    price: "$8,500",
    category: "Art & Culture",
  },
  {
    id: "patagonia-expedition",
    title: "Patagonia Expedition",
    location: "Patagonia, Argentina",
    date: "December 2025",
    image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800",
    price: "$22,000",
    category: "Adventure",
  },
  {
    id: "fashion-week-milan",
    title: "Milan Fashion Week Access",
    location: "Milan, Italy",
    date: "September 2025",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800",
    price: "$15,000",
    category: "Fashion",
  },
  {
    id: "yacht-week-monaco",
    title: "Monaco Yacht Week",
    location: "Monaco",
    date: "September 2025",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800",
    price: "$35,000",
    category: "Maritime",
  },
  {
    id: "safari-kenya",
    title: "Kenya Private Safari",
    location: "Masai Mara, Kenya",
    date: "August 2025",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800",
    price: "$28,000",
    category: "Safari",
  },
];

const categories = ["All", "Culinary", "Art & Culture", "Adventure", "Fashion", "Maritime", "Safari"];

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-caps text-muted">Curated Experiences</span>
            <h1 className="font-headline text-6xl lg:text-8xl mt-4">
              Moments That
              <br />
              Define a Life
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Featured Experience */}
      <section className="px-6 lg:px-12 pb-20">
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
                <span className="font-caps text-white/70">{featuredExperience.spots}</span>
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
      <section className="px-6 lg:px-12 pb-12 border-t border-border pt-8">
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
      <section className="px-6 lg:px-12 pb-24">
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
                  <p className="font-headline text-lg mt-3">{experience.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Experiences CTA */}
      <section className="bg-black text-white py-24 px-6 lg:px-12">
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

<Footer />
    </main>
  );
}
