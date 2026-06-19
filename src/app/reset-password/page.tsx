"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/navigation/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const supabase = createClient();
    // The recovery link establishes a session (handled automatically by the
    // browser client). Once it exists, the user can set a new password.
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) setReady(true);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "PASSWORD_RECOVERY" || session) setReady(true);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });
    setSubmitting(false);

    if (updateError) {
      setError("Could not update your password. The link may have expired.");
      return;
    }

    setDone(true);
    setTimeout(() => {
      router.push("/dashboard");
      router.refresh();
    }, 1500);
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
            {done ? (
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <h1 className="font-headline text-3xl">Password Updated</h1>
                <p className="font-body text-muted mt-4">
                  Redirecting you to your dashboard...
                </p>
              </div>
            ) : !ready ? (
              <div className="text-center">
                <h1 className="font-headline text-3xl">Reset Password</h1>
                <p className="font-body text-muted mt-4">
                  Open this page from the reset link in your email. If you got
                  here by mistake,{" "}
                  <Link href="/forgot-password" className="text-white underline">
                    request a new link
                  </Link>
                  .
                </p>
              </div>
            ) : (
              <>
                <h1 className="font-headline text-4xl">Set New Password</h1>
                <p className="font-body text-muted mt-4">
                  Choose a new password for your account.
                </p>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="font-caps text-sm text-muted block mb-2">
                      New Password
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

                  <div>
                    <label className="font-caps text-sm text-muted block mb-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      required
                      value={confirm}
                      onChange={(e) => setConfirm(e.target.value)}
                      className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
                      placeholder="••••••••"
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
                    {submitting ? "Updating..." : "Update Password"}
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
