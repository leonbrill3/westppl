"use client";

import { Header } from "@/components/navigation/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users, Calendar } from "lucide-react";

const cities = [
  {
    name: "Miami",
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800",
    members: "1,200+",
    description: "Where it all began. Our flagship community brings together Miami's most dynamic individuals.",
  },
  {
    name: "Los Angeles",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800",
    members: "850+",
    description: "From Hollywood to Silicon Beach, LA's creative elite gather here.",
  },
  {
    name: "New York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
    members: "1,500+",
    description: "The city that never sleeps deserves a community that keeps up.",
  },
];

const memberBenefits = [
  {
    title: "Curated Events",
    description: "Exclusive dinners, art previews, and experiences designed for our members.",
  },
  {
    title: "Private Network",
    description: "Connect with like-minded individuals across industries and interests.",
  },
  {
    title: "Concierge Access",
    description: "Your personal guide to the best experiences in every city.",
  },
  {
    title: "Member Perks",
    description: "Preferred access and benefits at partner establishments worldwide.",
  },
];

const upcomingEvents = [
  {
    title: "Summer Soirée",
    location: "Miami Beach",
    date: "June 15, 2025",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
  },
  {
    title: "Art Basel Preview",
    location: "Miami",
    date: "December 1, 2025",
    image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=800",
  },
  {
    title: "Napa Valley Retreat",
    location: "California",
    date: "October 8, 2025",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800",
  },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="font-caps text-muted">Our Community</span>
            <h1 className="font-headline text-6xl lg:text-8xl mt-4">
              Where
              <br />
              Extraordinary
              <br />
              Meets
            </h1>
            <p className="font-body text-xl text-muted mt-6 leading-relaxed">
              West PPL is more than a membership—it's a community of curious, accomplished
              individuals who believe life is best lived intentionally. We connect remarkable
              people with remarkable experiences across Miami, Los Angeles, and New York.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-24 px-6 lg:px-12 border-t border-border">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-caps text-muted">Our Cities</span>
            <h2 className="font-headline text-4xl lg:text-5xl mt-4">
              Three Cities, One Community
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cities.map((city, index) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/3] relative overflow-hidden mb-6">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex items-center gap-2 text-pink mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="font-caps text-sm">{city.name}</span>
                </div>
                <div className="flex items-center gap-2 text-muted mb-4">
                  <Users className="w-4 h-4" />
                  <span className="font-body text-sm">{city.members} members</span>
                </div>
                <p className="font-body text-muted">{city.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 lg:px-12 bg-dark-gray">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-caps text-muted">Member Benefits</span>
            <h2 className="font-headline text-4xl lg:text-5xl mt-4">
              What You Get
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {memberBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-headline text-xl mb-4">{benefit.title}</h3>
                <p className="font-body text-muted">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-caps text-muted">What's Next</span>
            <h2 className="font-headline text-4xl lg:text-5xl mt-4">
              Upcoming Events
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] relative overflow-hidden mb-6">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-4 text-muted mb-2">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span className="font-caps text-xs">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span className="font-caps text-xs">{event.date}</span>
                  </div>
                </div>
                <h3 className="font-headline text-2xl group-hover:text-pink transition-colors">
                  {event.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/experiences" className="btn-outline inline-flex items-center gap-2">
              View All Events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 border-t border-border">
        <div className="max-w-[1600px] mx-auto text-center">
          <h2 className="font-headline text-4xl lg:text-5xl">
            Ready to Join?
          </h2>
          <p className="font-body text-xl text-muted mt-4 max-w-2xl mx-auto">
            We're always looking for curious, accomplished individuals to join our community.
          </p>
          <Link href="/apply" className="btn-primary inline-flex items-center gap-2 mt-8">
            Apply for Membership
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto text-center">
          <Link href="/" className="font-headline text-2xl">
            WEST PPL
          </Link>
          <p className="font-caps text-subtle mt-4">
            &copy; 2025 West PPL. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
