"use client";

import { Header } from "@/components/navigation/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const locations = [
  {
    city: "Miami",
    address: "Design District, Miami, FL",
    flagship: true,
  },
  {
    city: "New York",
    address: "Tribeca, New York, NY",
    flagship: false,
  },
  {
    city: "Los Angeles",
    address: "West Hollywood, CA",
    flagship: false,
  },
  {
    city: "London",
    address: "Mayfair, London",
    flagship: false,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-caps text-muted">Contact</span>
              <h1 className="font-headline text-6xl lg:text-8xl mt-4">
                Get in
                <br />
                Touch
              </h1>
              <p className="font-body text-xl text-muted mt-6 leading-relaxed">
                Whether you're interested in membership, have a question about our services,
                or simply want to learn more, we'd love to hear from you.
              </p>

              {/* Contact Info */}
              <div className="mt-12 space-y-6">
                <a
                  href="mailto:hello@westavegroup.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-black flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="font-caps text-muted block">Email</span>
                    <span className="font-body group-hover:text-muted transition-colors">
                      hello@westavegroup.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+13055551234"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-black flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="font-caps text-muted block">Phone</span>
                    <span className="font-body group-hover:text-muted transition-colors">
                      +1 (305) 555-1234
                    </span>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-dark-gray p-8 lg:p-12"
            >
              <h2 className="font-headline text-2xl mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-caps text-sm text-muted block mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-black transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="font-caps text-sm text-muted block mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-black transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-caps text-sm text-muted block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-black transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="font-caps text-sm text-muted block mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-black transition-colors">
                    <option>Membership Inquiry</option>
                    <option>Concierge Services</option>
                    <option>Experience Booking</option>
                    <option>Press & Media</option>
                    <option>Partnership Opportunities</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-caps text-sm text-muted block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-black transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-black text-white py-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-caps text-subtle">Locations</span>
            <h2 className="font-headline text-4xl lg:text-5xl mt-4">
              Find Us Worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto bg-black text-white/10 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-2xl">{location.city}</h3>
                {location.flagship && (
                  <span className="font-caps text-xs text-subtle">Flagship</span>
                )}
                <p className="font-body text-subtle mt-2">{location.address}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-caps text-muted">FAQ</span>
            <h2 className="font-headline text-4xl lg:text-5xl mt-4">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How do I become a member?",
                a: "Membership is by application only. Submit your application through our website, and our team will review it within 5-7 business days.",
              },
              {
                q: "What's included in membership?",
                a: "Membership includes access to our concierge services, exclusive experiences, West Mag content, and our global member community. Benefits vary by tier.",
              },
              {
                q: "Can I use concierge services without being a member?",
                a: "Our concierge marketplace is exclusive to West members. However, we encourage you to apply for membership to access these services.",
              },
              {
                q: "What cities do you operate in?",
                a: "We have hubs in Miami, New York, Los Angeles, and London, but our services extend globally through our partner network.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-b border-border pb-6"
              >
                <h3 className="font-headline text-xl">{faq.q}</h3>
                <p className="font-body text-muted mt-3">{faq.a}</p>
              </motion.div>
            ))}
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
