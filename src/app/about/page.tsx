"use client";

import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const values = [
  {
    title: "Curation Over Accumulation",
    description: "We believe the best things in life are carefully chosen, not collected. Quality always trumps quantity.",
  },
  {
    title: "Access Over Ownership",
    description: "True luxury isn't about possessing things—it's about experiencing them. We unlock doors others don't know exist.",
  },
  {
    title: "Connection Over Transaction",
    description: "Every relationship matters. We build communities, not customer lists. Genuine bonds create lasting value.",
  },
  {
    title: "Discretion Over Display",
    description: "Elegance is quiet. We serve those who don't need to prove their success, only enjoy it.",
  },
];

const team = [
  {
    name: "Alexandra Chen",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
  },
  {
    name: "Marcus Webb",
    role: "Chief Experience Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
  },
  {
    name: "Sofia Mendez",
    role: "Head of Concierge",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
  },
  {
    name: "James Park",
    role: "Editorial Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  },
];

const milestones = [
  { year: "2018", event: "West Ave Group founded in Miami" },
  { year: "2019", event: "Launch of West Mag digital platform" },
  { year: "2020", event: "Concierge marketplace goes live" },
  { year: "2021", event: "Expansion to New York and Los Angeles" },
  { year: "2022", event: "1,000 founding members" },
  { year: "2023", event: "International expansion begins" },
  { year: "2024", event: "Launch of curated experiences program" },
  { year: "2025", event: "Global community reaches 5,000 members" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-caps text-muted">About West</span>
              <h1 className="font-headline text-6xl lg:text-8xl mt-4">
                Redefining
                <br />
                Luxury Access
              </h1>
              <p className="font-body text-xl text-muted mt-6 leading-relaxed">
                West Ave Group exists to connect remarkable people with extraordinary experiences.
                We're not a membership club—we're a community of curious, accomplished individuals
                who believe life is best lived intentionally.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="aspect-square relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800"
                alt="West Ave Group"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-black text-white py-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-caps text-subtle">Our Philosophy</span>
            <h2 className="font-headline text-4xl lg:text-5xl mt-4">
              What We Believe
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l border-border-dark pl-6"
              >
                <h3 className="font-headline text-2xl">{value.title}</h3>
                <p className="font-body text-subtle mt-4">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] relative">
              <Image
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-caps text-muted">Our Story</span>
              <h2 className="font-headline text-4xl lg:text-5xl mt-4">
                Born from a
                <br />
                Simple Observation
              </h2>
              <div className="font-body text-muted mt-6 space-y-4">
                <p>
                  In 2018, our founder Alexandra Chen noticed something peculiar: the people she
                  admired most—successful, cultured, curious—were often too busy to discover
                  the experiences they craved.
                </p>
                <p>
                  They had the means but not the time. The taste but not the access.
                  The desire for connection but not the right circles.
                </p>
                <p>
                  West Ave Group was born to solve this. We became the bridge between remarkable
                  people and remarkable experiences. Not a concierge service, but a trusted guide.
                  Not a social club, but a genuine community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-dark-gray py-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-caps text-muted">Our Journey</span>
            <h2 className="font-headline text-4xl lg:text-5xl mt-4">
              Milestones
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                    <span className="font-headline text-3xl">{milestone.year}</span>
                    <p className="font-body text-muted mt-2">{milestone.event}</p>
                  </div>
                  <div className="hidden lg:flex w-4 h-4 bg-black rounded-full" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-caps text-muted">Leadership</span>
            <h2 className="font-headline text-4xl lg:text-5xl mt-4">
              Meet the Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="aspect-square relative mb-4 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale-hover"
                  />
                </div>
                <h3 className="font-headline text-xl">{member.name}</h3>
                <p className="font-caps text-muted mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12 border-t border-border">
        <div className="max-w-[1600px] mx-auto text-center">
          <h2 className="font-headline text-4xl lg:text-5xl">
            Join Our Community
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

<Footer />
    </main>
  );
}
