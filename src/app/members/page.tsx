"use client";

import { Header } from "@/components/navigation/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const membershipTiers = [
  {
    name: "Associate",
    price: "$2,500",
    period: "per year",
    description: "Entry into the West community",
    features: [
      "Access to West Mag digital content",
      "Member events invitations",
      "Concierge marketplace access",
      "Monthly newsletter",
      "Member directory access",
    ],
  },
  {
    name: "Premier",
    price: "$7,500",
    period: "per year",
    description: "Full West experience",
    features: [
      "Everything in Associate",
      "Priority event registration",
      "Dedicated concierge support",
      "Exclusive experiences access",
      "Partner hotel benefits",
      "Private dining reservations",
      "Art & culture previews",
    ],
    featured: true,
  },
  {
    name: "Founding",
    price: "By Invitation",
    period: "",
    description: "The inner circle",
    features: [
      "Everything in Premier",
      "24/7 white-glove concierge",
      "Private jet partnerships",
      "Yacht & villa access",
      "Investment opportunities",
      "Board advisory access",
      "Global chapter events",
    ],
  },
];

const benefits = [
  {
    title: "Curated Experiences",
    description: "From private gallery openings to chef's table dinners, access moments money alone can't buy.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
  },
  {
    title: "Global Network",
    description: "Connect with like-minded individuals across industries, interests, and continents.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
  },
  {
    title: "Concierge Services",
    description: "Your personal team for reservations, travel planning, and impossible-to-get access.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
  },
  {
    title: "Exclusive Content",
    description: "West Mag delivers insights, stories, and perspectives you won't find elsewhere.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800",
  },
];

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-white">
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
            <span className="font-caps text-muted">Membership</span>
            <h1 className="font-headline text-6xl lg:text-8xl mt-4">
              Join the
              <br />
              Inner Circle
            </h1>
            <p className="font-body text-xl text-muted mt-6 leading-relaxed">
              West membership is more than access—it's belonging to a community of curious,
              accomplished individuals who value experiences over possessions and connection over consumption.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Membership Image */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-[21/9] relative overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600"
              alt="West Members Event"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-headline text-4xl lg:text-6xl text-white text-center">
                Where Extraordinary
                <br />
                Becomes Ordinary
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-caps text-muted">Benefits</span>
            <h2 className="font-headline text-4xl lg:text-5xl mt-4">
              What Membership Offers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="aspect-square relative overflow-hidden mb-4">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    fill
                    className="object-cover grayscale-hover"
                  />
                </div>
                <h3 className="font-headline text-2xl">{benefit.title}</h3>
                <p className="font-body text-muted mt-2">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-off-white py-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-caps text-muted">Tiers</span>
            <h2 className="font-headline text-4xl lg:text-5xl mt-4">
              Choose Your Level
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {membershipTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 ${
                  tier.featured
                    ? "bg-black text-white"
                    : "bg-white border border-border"
                }`}
              >
                {tier.featured && (
                  <span className="font-caps text-subtle text-xs">Most Popular</span>
                )}
                <h3 className="font-headline text-3xl mt-2">{tier.name}</h3>
                <div className="mt-4">
                  <span className="font-headline text-4xl">{tier.price}</span>
                  {tier.period && (
                    <span className={`font-caps ${tier.featured ? "text-subtle" : "text-muted"} ml-2`}>
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className={`font-body mt-4 ${tier.featured ? "text-subtle" : "text-muted"}`}>
                  {tier.description}
                </p>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 ${tier.featured ? "text-white" : "text-black"}`} />
                      <span className="font-body text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/apply"
                  className={`mt-8 w-full ${tier.featured ? "btn-white" : "btn-primary"}`}
                >
                  Apply Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto text-center">
          <h2 className="font-headline text-4xl lg:text-5xl">
            Ready to Begin?
          </h2>
          <p className="font-body text-xl text-muted mt-4 max-w-2xl mx-auto">
            Our membership committee reviews every application personally.
            We're looking for individuals who will contribute to and benefit from our community.
          </p>
          <Link href="/apply" className="btn-primary inline-flex items-center gap-2 mt-8">
            Start Your Application
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 lg:px-12">
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
