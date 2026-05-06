"use client";

import { Header } from "@/components/navigation/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import { User, Settings, Calendar, Wallet, Heart, MessageSquare } from "lucide-react";

const menuItems = [
  { icon: User, label: "Profile", href: "/dashboard/profile" },
  { icon: Settings, label: "Preferences", href: "/dashboard/preferences" },
  { icon: Calendar, label: "Bookings", href: "/dashboard/bookings" },
  { icon: Wallet, label: "Wallet", href: "/dashboard/wallet" },
  { icon: MessageSquare, label: "Requests", href: "/dashboard/requests" },
  { icon: Heart, label: "Favorites", href: "/dashboard/favorites" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 lg:pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-caps text-muted">Welcome Back</span>
            <h1 className="font-headline text-6xl lg:text-7xl mt-4">
              Your Dashboard
            </h1>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-4 p-6 border border-border hover:border-black transition-colors group"
                >
                  <div className="w-12 h-12 bg-off-white flex items-center justify-center group-hover:bg-black transition-colors">
                    <item.icon className="w-6 h-6 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-headline text-xl">{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-off-white">
            <h2 className="font-headline text-2xl">Need Assistance?</h2>
            <p className="font-body text-muted mt-4">
              Your dedicated concierge is available 24/7 to help with any requests.
            </p>
            <Link href="/contact" className="btn-primary mt-6">
              Contact Concierge
            </Link>
          </div>
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
