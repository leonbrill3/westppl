"use client";

import { Header } from "@/components/navigation/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Access to curated experiences worldwide",
  "Dedicated concierge support",
  "West Mag premium content",
  "Member events and gatherings",
  "Global partner benefits",
  "Priority reservations and bookings",
];

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-12 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="font-caps text-muted">Application</span>
            <h1 className="font-headline text-6xl lg:text-7xl mt-4">
              Apply for
              <br />
              Membership
            </h1>
            <p className="font-body text-xl text-muted mt-6">
              Join a community of curious, accomplished individuals who value
              experiences over possessions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Benefits Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 bg-dark-gray p-8">
                <h2 className="font-headline text-2xl mb-6">Member Benefits</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 text-white" />
                      <span className="font-body text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="font-caps text-sm text-muted">Review Process</p>
                  <p className="font-body text-sm text-muted mt-2">
                    Applications are reviewed by our membership committee within 5-7 business days.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <form className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="font-headline text-xl mb-6">Personal Information</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-caps text-sm text-muted block mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-caps text-sm text-muted block mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="font-caps text-sm text-muted block mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <label className="font-caps text-sm text-muted block mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="font-caps text-sm text-muted block mb-2">
                      City of Residence *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                {/* Professional */}
                <div>
                  <h3 className="font-headline text-xl mb-6">Professional Background</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="font-caps text-sm text-muted block mb-2">
                        Industry *
                      </label>
                      <select
                        required
                        className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-black transition-colors"
                      >
                        <option value="">Select industry</option>
                        <option>Finance & Investment</option>
                        <option>Technology</option>
                        <option>Entertainment & Media</option>
                        <option>Real Estate</option>
                        <option>Healthcare</option>
                        <option>Legal</option>
                        <option>Fashion & Luxury</option>
                        <option>Art & Design</option>
                        <option>Hospitality</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-caps text-sm text-muted block mb-2">
                        Title/Role
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="font-caps text-sm text-muted block mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                {/* Interests */}
                <div>
                  <h3 className="font-headline text-xl mb-6">Your Interests</h3>
                  <div>
                    <label className="font-caps text-sm text-muted block mb-2">
                      What interests you most about West? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-black transition-colors resize-none"
                      placeholder="Tell us about your interests..."
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-8 border-t border-border">
                  <label className="flex items-start gap-3 mb-8 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 w-5 h-5 accent-black"
                    />
                    <span className="font-body text-sm text-muted">
                      I agree to the{" "}
                      <Link href="/terms" className="underline">Terms of Service</Link> and{" "}
                      <Link href="/privacy" className="underline">Privacy Policy</Link>
                    </span>
                  </label>

                  <button type="submit" className="btn-primary inline-flex items-center gap-2">
                    Submit Application
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
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
