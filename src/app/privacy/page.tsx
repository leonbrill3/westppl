"use client";

import { Header } from "@/components/navigation/Header";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
              Privacy Policy
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
              <h2 className="font-headline text-2xl text-white mb-4">Information We Collect</h2>
              <p>We collect information you provide directly to us, including name, email, and other contact information when you apply for membership, use our services, or communicate with us.</p>
            </section>

            <section>
              <h2 className="font-headline text-2xl text-white mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to provide, maintain, and improve our services, process transactions, send communications, and personalize your experience.</p>
            </section>

            <section>
              <h2 className="font-headline text-2xl text-white mb-4">Information Sharing</h2>
              <p>We do not sell your personal information. We may share information with service providers who assist us in operating our platform, and as required by law.</p>
            </section>

            <section>
              <h2 className="font-headline text-2xl text-white mb-4">Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. Contact us at privacy@westavegroup.com for any privacy-related requests.</p>
            </section>

            <section>
              <h2 className="font-headline text-2xl text-white mb-4">Contact</h2>
              <p>For questions about this Privacy Policy, please contact us at privacy@westavegroup.com.</p>
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
