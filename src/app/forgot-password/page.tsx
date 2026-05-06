"use client";

import { Header } from "@/components/navigation/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-24 lg:pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-dark-gray p-8 lg:p-12"
          >
            <Link href="/login" className="inline-flex items-center gap-2 font-caps text-muted hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </Link>

            <h1 className="font-headline text-4xl">Reset Password</h1>
            <p className="font-body text-muted mt-4">
              Enter your email address and we'll send you instructions to reset your password.
            </p>

            <form className="mt-8 space-y-6">
              <div>
                <label className="font-caps text-sm text-muted block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-black transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2">
                Send Reset Link
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto text-center">
          <Link href="/" className="font-headline text-2xl">WEST</Link>
          <p className="font-caps text-subtle mt-4">&copy; 2025 West Ave Group.</p>
        </div>
      </footer>
    </main>
  );
}
