"use client";

import { Header } from "@/components/navigation/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function WalletPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <section className="pt-24 lg:pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <Link href="/dashboard" className="inline-flex items-center gap-2 font-caps text-muted hover:text-black transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="font-caps text-muted">Dashboard</span>
            <h1 className="font-headline text-6xl lg:text-7xl mt-4">Wallet</h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-16 p-8 bg-off-white">
            <p className="font-body text-muted">This section is coming soon. Contact your concierge for assistance.</p>
            <Link href="/contact" className="btn-primary mt-6">Contact Concierge</Link>
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
