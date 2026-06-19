"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/navigation/Header";
import { Container } from "@/components/layout/Container";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (signInError) {
      setSubmitting(false);
      setError("Invalid email or password. Please try again.");
      return;
    }

    // Honor a ?redirect= param set by the auth middleware, else go to dashboard.
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect") || "/dashboard";
    router.push(redirect);
    router.refresh();
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Header />

      <section className="flex-1 flex items-center pt-24 lg:pt-32 pb-16">
        <Container className="w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
            >
              <h1 className="font-headline text-7xl xl:text-8xl">
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
              className="bg-dark-gray p-8 sm:p-10 lg:p-12 max-w-md w-full mx-auto lg:mx-0 lg:ml-auto"
            >
              <div className="flex items-center gap-1 mb-10">
                <span className="font-headline text-3xl">WEST</span>
                <span className="font-caps text-[10px] text-muted mt-2">MEMBERS</span>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="font-caps text-sm text-muted block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="font-caps text-sm text-muted block mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
                    placeholder="••••••••"
                  />
                </div>

                {error && (
                  <p className="font-body text-sm text-red-400">{error}</p>
                )}

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-white" />
                    <span className="font-caps text-xs text-muted">Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="font-caps text-xs text-muted hover:text-white transition-colors">
                    Forgot Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Signing In..." : "Sign In"}
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="font-caps text-sm text-muted text-center">
                  Need assistance?{" "}
                  <Link href="/contact" className="text-white hover:underline">
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
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <Container className="text-center">
          <Link href="/" className="font-headline text-2xl">
            WEST
          </Link>
          <p className="font-caps text-subtle mt-4">
            &copy; 2025 West Ave Group. All rights reserved.
          </p>
        </Container>
      </footer>
    </main>
  );
}
