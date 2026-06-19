"use client";

import { Header } from "@/components/navigation/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-24 lg:pt-32 pb-24 px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="font-caps text-muted">Support</span>
            <h1 className="font-headline text-6xl lg:text-7xl mt-4">
              How Can We Help?
            </h1>
            <p className="font-body text-xl text-muted mt-6">
              Our member support team is available 24/7 to assist you.
            </p>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { icon: Mail, title: "Email", desc: "support@westavegroup.com", action: "mailto:support@westavegroup.com" },
              { icon: Phone, title: "Phone", desc: "+1 (305) 555-1234", action: "tel:+13055551234" },
              { icon: MessageCircle, title: "Live Chat", desc: "Available 24/7", action: "#" },
            ].map((item, index) => (
              <motion.a
                key={item.title}
                href={item.action}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-border p-8 text-center hover:border-black transition-colors"
              >
                <item.icon className="w-8 h-8 mx-auto" />
                <h3 className="font-headline text-xl mt-4">{item.title}</h3>
                <p className="font-body text-muted mt-2">{item.desc}</p>
              </motion.a>
            ))}
          </div>
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
