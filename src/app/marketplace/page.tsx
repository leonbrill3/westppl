"use client";

import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "travel",
    name: "Travel",
    description: "Private jets, yacht charters, villa rentals, and bespoke itineraries.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800",
    items: 42,
  },
  {
    id: "dining",
    name: "Dining",
    description: "Chef's tables, private dining rooms, and culinary experiences.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    items: 28,
  },
  {
    id: "fashion",
    name: "Fashion",
    description: "Personal styling, atelier access, and exclusive collections.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800",
    items: 35,
  },
  {
    id: "wellness",
    name: "Wellness",
    description: "Spa retreats, private training, and holistic programs.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
    items: 24,
  },
  {
    id: "home",
    name: "Home",
    description: "Interior design, art advisory, and home services.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    items: 31,
  },
];

const featuredServices = [
  {
    id: "private-jet-membership",
    name: "Private Jet Membership",
    category: "Travel",
    price: "From $12,500/mo",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800",
  },
  {
    id: "personal-chef-service",
    name: "Personal Chef Service",
    category: "Dining",
    price: "From $2,500/event",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
  },
  {
    id: "bespoke-tailoring",
    name: "Bespoke Tailoring",
    category: "Fashion",
    price: "From $5,000",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
  },
  {
    id: "wellness-retreat",
    name: "Private Wellness Retreat",
    category: "Wellness",
    price: "From $8,500/week",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
  },
];

export default function MarketplacePage() {
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
            <span className="font-caps text-muted">Concierge Marketplace</span>
            <h1 className="font-headline text-6xl lg:text-8xl mt-4">
              Access the
              <br />
              Extraordinary
            </h1>
            <p className="font-body text-xl text-muted mt-6 max-w-2xl">
              Our curated marketplace connects you with world-class services and experiences,
              vetted by our team and available exclusively to West members.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 lg:px-12 pb-24">
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
                      <span className="font-caps text-white/70">{category.items} Services</span>
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

      {/* Featured Services */}
      <section className="bg-dark-gray py-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="font-caps text-muted">Featured</span>
              <h2 className="font-headline text-4xl lg:text-5xl mt-4">
                Popular Services
              </h2>
            </div>
            <Link
              href="/marketplace"
              className="hidden lg:flex items-center gap-2 font-caps hover:text-muted transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/marketplace/${service.id}`} className="group block">
                  <div className="aspect-square relative overflow-hidden mb-4">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover grayscale-hover"
                    />
                  </div>
                  <span className="font-caps text-muted">{service.category}</span>
                  <h3 className="font-headline text-xl mt-1 group-hover:text-muted transition-colors">
                    {service.name}
                  </h3>
                  <p className="font-body text-muted mt-1">{service.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Concierge CTA */}
      <section className="py-24 px-6 lg:px-12">
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

<Footer />
    </main>
  );
}
