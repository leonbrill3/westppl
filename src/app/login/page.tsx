"use client";

import { Header } from "@/components/navigation/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 lg:pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
            >
              <h1 className="font-headline text-7xl">
                Welcome
                <br />
                Back
              </h1>
              <p className="font-body text-xl text-muted mt-6 max-w-md">
                Access your member dashboard, manage bookings, and explore exclusive content.
              </p>
              <div className="mt-12">
                <p className="font-caps text-muted">Not a member yet?</p>
                <Link href="/apply" className="link-underline font-caps mt-2 inline-block">
                  Apply for Membership
                </Link>
              </div>
            </motion.div>

            {/* Login Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-off-white p-8 lg:p-12 max-w-md mx-auto lg:mx-0 w-full"
            >
              <div className="flex items-center gap-1 mb-8">
                <span className="font-headline text-3xl">WEST</span>
                <span className="font-caps text-[10px] text-muted mt-2">MEMBERS</span>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="font-caps text-sm text-muted block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white border border-border font-body focus:outline-none focus:border-black transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="font-caps text-sm text-muted block mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-white border border-border font-body focus:outline-none focus:border-black transition-colors"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-black" />
                    <span className="font-caps text-xs text-muted">Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="font-caps text-xs text-muted hover:text-black transition-colors">
                    Forgot Password?
                  </Link>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Sign In
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="font-caps text-sm text-muted text-center">
                  Need assistance?{" "}
                  <Link href="/contact" className="text-black hover:underline">
                    Contact Support
                  </Link>
                </p>
              </div>

              <div className="lg:hidden mt-8 text-center">
                <p className="font-caps text-muted">Not a member?</p>
                <Link href="/apply" className="btn-outline mt-4 inline-flex items-center gap-2">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
