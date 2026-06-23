"use client";

import { useState } from "react";
import { Header } from "@/components/navigation/Header";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

import { membershipPerks } from "@/lib/data/membership";

const benefits = membershipPerks.map((perk) => perk.title);

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  chapter: "",
  socialPlatform: "instagram",
  socialHandle: "",
  address: "",
  birthday: "",
  industry: "",
  title: "",
  company: "",
  why: "",
  contribution: "",
};

type FormState = typeof initialForm;

export default function ApplyPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update =
    (field: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const supabase = createClient();
    const { error: insertError } = await supabase.from("applications").insert({
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      chapter: form.chapter as "miami" | "la" | "nyc",
      social_platform: form.socialPlatform,
      social_handle: form.socialHandle.trim().replace(/^@/, ""),
      // Keep `instagram` populated when that's the chosen platform (used by the
      // members profile); otherwise leave it null.
      instagram:
        form.socialPlatform === "instagram"
          ? form.socialHandle.trim().replace(/^@/, "") || null
          : null,
      address: form.address.trim(),
      birthday: form.birthday || null,
      why: form.why.trim(),
      industry: form.industry || null,
      title: form.title.trim() || null,
      company: form.company.trim() || null,
      contribution: form.contribution.trim() || null,
    });

    setSubmitting(false);

    if (insertError) {
      setError(
        "Something went wrong submitting your application. Please try again."
      );
      return;
    }

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-12 px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="font-caps text-muted">Application</span>
            <h1 className="font-headline text-6xl lg:text-7xl mt-4">
              Come Say
              <br />
              Hello
            </h1>
            <p className="font-body text-xl text-muted mt-6">
              West Ppl is built on good people. Tell us a little about you —
              we&apos;d love to get to know you and find the right chapter for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="px-6 md:px-10 lg:px-16 xl:px-24 pb-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Benefits Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 bg-dark-gray p-8">
                <h2 className="font-headline text-2xl mb-6">Member Benefits</h2>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 text-white" />
                      <span className="font-body text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="font-caps text-sm text-muted">Review Process</p>
                  <p className="font-body text-sm text-muted mt-2">
                    Applications are reviewed by our membership committee within
                    5-7 business days.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              {submitted ? (
                <div className="bg-dark-gray p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-headline text-3xl mb-4">
                    Application Received
                  </h3>
                  <p className="font-body text-muted max-w-md mx-auto">
                    Thank you for applying to West. Our membership committee will
                    review your application and be in touch within 5-7 business
                    days.
                  </p>
                  <Link
                    href="/"
                    className="btn-outline mt-8 inline-flex items-center gap-2"
                  >
                    Back to Home
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  {/* Personal Information */}
                  <div>
                    <h3 className="font-headline text-xl mb-6">
                      Personal Information
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="font-caps text-sm text-muted block mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.firstName}
                          onChange={update("firstName")}
                          className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-caps text-sm text-muted block mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.lastName}
                          onChange={update("lastName")}
                          className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="font-caps text-sm text-muted block mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={update("email")}
                          className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-caps text-sm text-muted block mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={update("phone")}
                          className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="font-caps text-sm text-muted block mb-2">
                          Chapter *
                        </label>
                        <select
                          required
                          value={form.chapter}
                          onChange={update("chapter")}
                          className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
                        >
                          <option value="">Select chapter</option>
                          <option value="miami">Miami</option>
                          <option value="la">Los Angeles</option>
                          <option value="nyc">New York</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-caps text-sm text-muted block mb-2">
                          Social Profile *
                        </label>
                        <div className="flex">
                          <select
                            value={form.socialPlatform}
                            onChange={update("socialPlatform")}
                            className="px-3 py-3 bg-black text-white border border-border border-r-0 font-body focus:outline-none focus:border-white transition-colors"
                          >
                            <option value="instagram">Instagram</option>
                            <option value="linkedin">LinkedIn</option>
                          </select>
                          <input
                            type="text"
                            required
                            value={form.socialHandle}
                            onChange={update("socialHandle")}
                            placeholder={
                              form.socialPlatform === "linkedin"
                                ? "linkedin.com/in/you"
                                : "@username"
                            }
                            className="flex-1 min-w-0 px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 mt-6">
                      <div>
                        <label className="font-caps text-sm text-muted block mb-2">
                          Address *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.address}
                          onChange={update("address")}
                          placeholder="Street, City, State, ZIP"
                          className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="font-caps text-sm text-muted block mb-2">
                          Birthday *
                        </label>
                        <input
                          type="date"
                          required
                          value={form.birthday}
                          onChange={update("birthday")}
                          className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors [color-scheme:dark]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Professional */}
                  <div>
                    <h3 className="font-headline text-xl mb-6">
                      Professional Background
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="font-caps text-sm text-muted block mb-2">
                          Industry
                        </label>
                        <select
                          value={form.industry}
                          onChange={update("industry")}
                          className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
                        >
                          <option value="">Select industry</option>
                          <option>Finance &amp; Investment</option>
                          <option>Technology</option>
                          <option>Entertainment &amp; Media</option>
                          <option>Real Estate</option>
                          <option>Healthcare</option>
                          <option>Legal</option>
                          <option>Fashion &amp; Luxury</option>
                          <option>Art &amp; Design</option>
                          <option>Hospitality</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-caps text-sm text-muted block mb-2">
                          Title/Role
                        </label>
                        <input
                          type="text"
                          value={form.title}
                          onChange={update("title")}
                          className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="font-caps text-sm text-muted block mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={update("company")}
                        className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* About you */}
                  <div>
                    <h3 className="font-headline text-xl mb-6">Tell Us About You</h3>
                    <div>
                      <label className="font-caps text-sm text-muted block mb-2">
                        What draws you to West Ppl? *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={form.why}
                        onChange={update("why")}
                        className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors resize-none"
                        placeholder="The events, the people, a friend who's already in — tell us what brought you here."
                      />
                    </div>

                    <div className="mt-6">
                      <label className="font-caps text-sm text-muted block mb-2">
                        How would you like to contribute to the community?
                      </label>
                      <textarea
                        rows={3}
                        value={form.contribution}
                        onChange={update("contribution")}
                        className="w-full px-4 py-3 bg-black text-white border border-border font-body focus:outline-none focus:border-white transition-colors resize-none"
                        placeholder="Hosting, connecting people, sharing a craft, just showing up — anything you'd bring."
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-8 border-t border-border">
                    {error && (
                      <p className="font-body text-sm text-red-400 mb-6">
                        {error}
                      </p>
                    )}
                    <label className="flex items-start gap-3 mb-8 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-1 w-5 h-5 accent-white"
                      />
                      <span className="font-body text-sm text-muted">
                        I agree to the{" "}
                        <Link href="/terms" className="underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="underline">
                          Privacy Policy
                        </Link>
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Submitting..." : "Submit Application"}
                      {!submitting && <ArrowRight className="w-4 h-4" />}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 md:px-10 lg:px-16 xl:px-24">
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
