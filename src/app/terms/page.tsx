"use client";

import { Header } from "@/components/navigation/Header";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-24 lg:pt-32 pb-24 px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-caps text-muted">Legal</span>
            <h1 className="font-headline text-6xl lg:text-7xl mt-4">
              Terms of Service
            </h1>
            <p className="font-caps text-muted mt-6">Last updated: January 2025</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 space-y-8 font-body text-muted"
          >
            <section>
              <h2 className="font-headline text-2xl text-white mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using West Ave Group services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
            </section>

            <section>
              <h2 className="font-headline text-2xl text-white mb-4">2. Membership</h2>
              <p>Membership is subject to application and approval. West Ave Group reserves the right to accept or decline any membership application at its sole discretion. Membership fees are non-refundable except as otherwise provided herein.</p>
            </section>

            <section>
              <h2 className="font-headline text-2xl text-white mb-4">3. Services</h2>
              <p>West Ave Group provides concierge services, access to curated experiences, and member benefits. The availability and nature of services may vary and are subject to change without notice.</p>
            </section>

            <section>
              <h2 className="font-headline text-2xl text-white mb-4">4. Privacy</h2>
              <p>Your privacy is important to us. Please review our <Link href="/privacy" className="underline">Privacy Policy</Link> for information on how we collect, use, and protect your personal information.</p>
            </section>

            <section>
              <h2 className="font-headline text-2xl text-white mb-4">5. Contact</h2>
              <p>For questions about these Terms, please contact us at legal@westavegroup.com.</p>
            </section>
          </motion.div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[1600px] mx-auto text-center">
          <Link href="/" className="font-headline text-2xl">WEST</Link>
          <p className="font-caps text-subtle mt-4">&copy; 2025 West Ave Group.</p>
        </div>
      </footer>
    </main>
  );
}
