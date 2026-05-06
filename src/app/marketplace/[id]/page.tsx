"use client";

import { Header } from "@/components/navigation/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { use } from "react";

const services: Record<string, {
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  includes: string[];
}> = {
  "travel": {
    name: "Travel Services",
    category: "Travel",
    description: "Experience the world through our curated travel services. From private jets to yacht charters, villa rentals to bespoke itineraries—we handle every detail.",
    price: "Starting from $5,000",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600",
    features: [
      "Private jet charters worldwide",
      "Superyacht experiences",
      "Exclusive villa rentals",
      "Custom itinerary planning",
      "24/7 travel support",
    ],
    includes: [
      "Dedicated travel consultant",
      "Airport meet and greet",
      "Luggage handling",
      "Local expertise and guides",
      "Emergency support line",
    ],
  },
  "dining": {
    name: "Dining Experiences",
    category: "Dining",
    description: "Access the world's most exclusive tables. From Michelin-starred chef's tables to private dining rooms and culinary journeys.",
    price: "Starting from $500",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600",
    features: [
      "Priority reservations at top restaurants",
      "Private chef experiences",
      "Wine cellar access",
      "Kitchen tours and tastings",
      "Culinary travel packages",
    ],
    includes: [
      "Personal dining concierge",
      "Menu customization",
      "Dietary accommodation",
      "Wine pairing expertise",
      "Special occasion planning",
    ],
  },
  "fashion": {
    name: "Fashion & Style",
    category: "Fashion",
    description: "Elevate your personal style with access to the world's finest ateliers, exclusive collections, and personal styling services.",
    price: "Starting from $2,500",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1600",
    features: [
      "Personal styling sessions",
      "Bespoke tailoring",
      "Atelier appointments",
      "Fashion week access",
      "Private shopping experiences",
    ],
    includes: [
      "Style consultation",
      "Wardrobe curation",
      "Trunk show invitations",
      "Limited edition access",
      "Alteration services",
    ],
  },
  "wellness": {
    name: "Wellness & Spa",
    category: "Wellness",
    description: "Rejuvenate body and mind with our wellness partnerships. Access world-class spas, private retreats, and holistic programs.",
    price: "Starting from $1,500",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600",
    features: [
      "Luxury spa reservations",
      "Private wellness retreats",
      "Personal training programs",
      "Meditation and mindfulness",
      "Medical wellness consultations",
    ],
    includes: [
      "Wellness assessment",
      "Customized programs",
      "Nutritional guidance",
      "Recovery protocols",
      "Ongoing support",
    ],
  },
  "home": {
    name: "Home & Lifestyle",
    category: "Home",
    description: "Transform your living spaces with our network of interior designers, art advisors, and home service specialists.",
    price: "Starting from $10,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600",
    features: [
      "Interior design services",
      "Art advisory and acquisition",
      "Smart home integration",
      "Property management",
      "Renovation oversight",
    ],
    includes: [
      "Design consultation",
      "Vendor coordination",
      "Project management",
      "Quality assurance",
      "Maintenance planning",
    ],
  },
};

const defaultService = {
  name: "Service Details",
  category: "Marketplace",
  description: "This exclusive service is available to West members. Contact our concierge team to learn more.",
  price: "Contact for pricing",
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600",
  features: [
    "Premium quality",
    "Personalized service",
    "Member-exclusive access",
    "24/7 support",
  ],
  includes: [
    "Consultation",
    "Custom planning",
    "Dedicated support",
  ],
};

export default function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const service = services[id] || defaultService;

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Back Link */}
      <div className="pt-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-2 font-caps text-muted hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Marketplace
          </Link>
        </div>
      </div>

      {/* Service Hero */}
      <section className="px-6 lg:px-12 py-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/3] relative overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.name}
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-center"
            >
              <span className="font-caps text-muted">{service.category}</span>
              <h1 className="font-headline text-5xl lg:text-6xl mt-4">
                {service.name}
              </h1>
              <p className="font-body text-lg text-muted mt-6">
                {service.description}
              </p>
              <p className="font-headline text-2xl mt-8">{service.price}</p>
              <Link href="/contact" className="btn-primary mt-8 inline-flex items-center gap-2 w-fit">
                Request Information
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features & Includes */}
      <section className="bg-off-white py-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-headline text-3xl mb-8">Services</h2>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-black" />
                    <span className="font-body">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-headline text-3xl mb-8">What's Included</h2>
              <ul className="space-y-4">
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 text-black" />
                    <span className="font-body">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto text-center">
          <h2 className="font-headline text-4xl lg:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="font-body text-lg text-muted mt-4 max-w-xl mx-auto">
            Our concierge team is ready to assist you. Contact us to learn more about this service.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <Link href="/contact" className="btn-primary">
              Contact Concierge
            </Link>
            <Link href="/marketplace" className="btn-outline">
              Browse More
            </Link>
          </div>
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
