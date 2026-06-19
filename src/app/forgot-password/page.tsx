"use client";

import { useState } from "react";
import { Header } from "@/components/navigation/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const supabase = createClient();
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(
      email.trim(),
      { redirectTo: `${window.location.origin}/reset-password` }
    );

    setSubmitting(false);

    if (resetError) {
      setError("Something went wrong. Please try again.");
      return;
    }

    // Always show success (don't reveal whether an account exists).
    setSent(true);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="pt-24 lg:pt-32 pb-24 px-6 md:px-10 lg:px-16 xl:px-24">
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

            {sent ? (
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h1 className="font-headline text-3xl">Check Your Email</h1>
                <p className="font-body text-muted mt-4">
                  If an account exists for{" "}
                  <span className="text-white">{email}</span>, you&apos;ll receive
                  a link to reset your password shortly.
                </p>
              </div>
            ) : (
              <>
                <h1 className="font-headline text-4xl">Reset Password</h1>
                <p className="font-body text-muted mt-4">
                  Enter your email address and we&apos;ll send you instructions to reset your password.
                </p>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="font-caps text-sm text-muted block mb-2">
                      Email Address
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

                  {error && (
                    <p className="font-body text-sm text-red-400">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Send Reset Link"}
                    {!submitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </form>
              </>
            )}
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
