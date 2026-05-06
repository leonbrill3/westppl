"use client";

import { Header } from "@/components/navigation/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, MapPin, Users, Check } from "lucide-react";
import { use } from "react";

const experiences: Record<string, {
  title: string;
  location: string;
  date: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  groupSize: string;
  highlights: string[];
  itinerary: { day: string; title: string; description: string }[];
}> = {
  "tuscany-harvest": {
    title: "Tuscan Harvest Experience",
    location: "Tuscany, Italy",
    date: "October 15-22, 2025",
    description: "Seven days immersed in the traditions of Tuscan winemaking. Private vineyard tours, hands-on harvest participation, and intimate dinners with legendary producers. Stay at a restored 16th-century villa and experience the magic of harvest season.",
    image: "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1600",
    price: "$18,500",
    duration: "7 nights",
    groupSize: "12 guests max",
    highlights: [
      "Stay at a private 16th-century villa",
      "Participate in traditional grape harvest",
      "Private tours of legendary estates",
      "Dinners with winemakers",
      "Exclusive wine cellar tastings",
      "Cooking classes with local chefs",
    ],
    itinerary: [
      { day: "Day 1", title: "Arrival in Florence", description: "Private transfer to villa, welcome dinner under the stars" },
      { day: "Day 2", title: "Chianti Classico", description: "Tour prestigious estates, harvest participation, sunset aperitivo" },
      { day: "Day 3", title: "Brunello di Montalcino", description: "Day trip to Montalcino, private cellar tours, lunch with a legend" },
      { day: "Day 4", title: "Rest & Explore", description: "Morning at leisure, afternoon cooking class, truffle hunting" },
      { day: "Day 5", title: "Super Tuscans", description: "Visit Bolgheri, meet winemakers, beachside lunch" },
      { day: "Day 6", title: "The Art of Blending", description: "Create your own blend, wine education, gala dinner" },
      { day: "Day 7", title: "Departure", description: "Farewell breakfast, private transfers" },
    ],
  },
};

const defaultExperience = {
  title: "Experience Details",
  location: "Location TBD",
  date: "Coming Soon",
  description: "This exclusive experience is currently being planned. Contact our team to be notified when details are announced.",
  image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600",
  price: "Contact for pricing",
  duration: "TBD",
  groupSize: "Limited availability",
  highlights: [
    "Exclusive access",
    "Expert guides",
    "Luxury accommodations",
    "Curated experiences",
  ],
  itinerary: [],
};

export default function ExperiencePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const experience = experiences[id] || defaultExperience;

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Back Link */}
      <div className="pt-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 font-caps text-muted hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Experiences
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 lg:px-12 py-12">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="aspect-[21/9] relative overflow-hidden"
          >
            <Image
              src={experience.image}
              alt={experience.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Details */}
      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h1 className="font-headline text-5xl lg:text-6xl">
                  {experience.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 mt-6 text-muted">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="font-caps">{experience.location}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-caps">{experience.date}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span className="font-caps">{experience.groupSize}</span>
                  </span>
                </div>
                <p className="font-body text-lg text-muted mt-8 leading-relaxed">
                  {experience.description}
                </p>

                {/* Highlights */}
                <div className="mt-12">
                  <h2 className="font-headline text-2xl mb-6">Experience Highlights</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {experience.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-0.5 text-white" />
                        <span className="font-body">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Itinerary */}
                {experience.itinerary.length > 0 && (
                  <div className="mt-12">
                    <h2 className="font-headline text-2xl mb-6">Itinerary</h2>
                    <div className="space-y-6">
                      {experience.itinerary.map((day, index) => (
                        <motion.div
                          key={day.day}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                          className="border-l-2 border-border pl-6"
                        >
                          <span className="font-caps text-muted">{day.day}</span>
                          <h3 className="font-headline text-xl mt-1">{day.title}</h3>
                          <p className="font-body text-muted mt-2">{day.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24 bg-dark-gray p-8"
              >
                <span className="font-caps text-muted">Price per person</span>
                <p className="font-headline text-4xl mt-2">{experience.price}</p>
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between">
                    <span className="font-caps text-muted">Duration</span>
                    <span className="font-body">{experience.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-caps text-muted">Group Size</span>
                    <span className="font-body">{experience.groupSize}</span>
                  </div>
                </div>
                <Link href="/contact" className="btn-primary w-full mt-8 inline-flex items-center justify-center gap-2">
                  Reserve Your Spot
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="font-caps text-xs text-muted text-center mt-4">
                  Limited availability
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 lg:px-12 mt-12">
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
