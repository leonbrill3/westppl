"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Check, MapPin } from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { CHAPTERS, type Chapter } from "@/types";

const applicationSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  chapter: z.enum(["miami", "la", "nyc"]),
  instagram: z.string().optional(),
  referral: z.string().optional(),
  why: z.string().min(10, "Please tell us a bit about yourself"),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

const chapters = Object.values(CHAPTERS);

const chapterImages: Record<Chapter, string> = {
  miami: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200&q=80",
  la: "https://images.unsplash.com/photo-1515896769750-31548aa180ed?w=1200&q=80",
  nyc: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1200&q=80",
};

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
  });

  const selectedChapter = watch("chapter");

  const onSubmit = async (data: ApplicationForm) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  };

  const nextStep = async () => {
    if (step === 1) {
      const valid = await trigger("chapter");
      if (valid) setStep(2);
    } else if (step === 2) {
      const valid = await trigger(["name", "email", "phone"]);
      if (valid) setStep(3);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream">
        <Header />
        <div className="pt-32 px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center py-24">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="w-24 h-24 rounded-full bg-sage flex items-center justify-center mx-auto mb-10"
            >
              <Check className="w-12 h-12 text-white" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="font-caps text-muted mb-4">Application Received</p>
              <h1 className="font-editorial text-4xl md:text-5xl mb-6">
                Thank you for applying
              </h1>
              <p className="text-lg text-muted mb-10 max-w-lg mx-auto">
                We review every application personally. Expect to hear from us within 48 hours.
                In the meantime, follow us on Instagram for updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Link>
                <a
                  href="https://instagram.com/westppl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-foreground rounded-full font-medium hover:bg-foreground hover:text-background transition-colors"
                >
                  Follow @westppl
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-20 lg:pt-0 min-h-screen flex">
        {/* Left Side - Image */}
        <div className="hidden lg:block lg:w-1/2 fixed left-0 top-0 bottom-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedChapter || "default"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={selectedChapter ? chapterImages[selectedChapter] : chapterImages.miami}
                alt="West/PPL"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
            </motion.div>
          </AnimatePresence>

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-12">
            <div>
              <Link href="/" className="font-editorial text-3xl text-white">
                west<span className="text-white/50">/</span>ppl
              </Link>
            </div>
            <div>
              <motion.div
                key={selectedChapter || "default"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="font-caps text-white/60 mb-4">Join the community</p>
                <h2 className="font-editorial text-4xl text-white mb-4">
                  {selectedChapter
                    ? CHAPTERS[selectedChapter].tagline
                    : "Where extraordinary souls connect"}
                </h2>
                {selectedChapter && (
                  <p className="flex items-center gap-2 text-white/80">
                    <MapPin className="w-4 h-4" />
                    {CHAPTERS[selectedChapter].fullName}
                  </p>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 lg:ml-[50%]">
          <div className="min-h-screen flex flex-col">
            {/* Mobile Header */}
            <div className="lg:hidden px-6 pt-6">
              <Link
                href="/"
                className="inline-flex items-center text-sm text-muted hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </div>

            {/* Progress */}
            <div className="px-6 lg:px-16 pt-8 lg:pt-32">
              <div className="flex items-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      s <= step ? "bg-accent" : "bg-sand"
                    }`}
                  />
                ))}
              </div>
              <p className="font-caps text-muted mb-2">
                Step {step} of 3
              </p>
            </div>

            {/* Form Content */}
            <div className="flex-1 px-6 lg:px-16 py-8">
              <form onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col">
                <AnimatePresence mode="wait">
                  {/* Step 1: Chapter Selection */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex-1"
                    >
                      <h1 className="font-editorial text-3xl md:text-4xl mb-4">
                        Choose your chapter
                      </h1>
                      <p className="text-muted mb-10">
                        Select the city you&apos;ll be most active in.
                      </p>

                      <div className="space-y-4">
                        {chapters.map((chapter) => (
                          <button
                            key={chapter.id}
                            type="button"
                            onClick={() => setValue("chapter", chapter.id as Chapter)}
                            className={`w-full p-6 rounded-xl border-2 text-left transition-all ${
                              selectedChapter === chapter.id
                                ? "border-foreground bg-cream"
                                : "border-border hover:border-stone"
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="flex items-center gap-3 mb-2">
                                  <span
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: chapter.color }}
                                  />
                                  <span className="font-editorial text-xl">
                                    {chapter.name}
                                  </span>
                                </div>
                                <p className="text-muted">{chapter.fullName}</p>
                              </div>
                              {selectedChapter === chapter.id && (
                                <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center">
                                  <Check className="w-4 h-4 text-background" />
                                </div>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                      {errors.chapter && (
                        <p className="text-red-500 text-sm mt-4">Please select a chapter</p>
                      )}
                    </motion.div>
                  )}

                  {/* Step 2: Contact Info */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex-1"
                    >
                      <h1 className="font-editorial text-3xl md:text-4xl mb-4">
                        Tell us who you are
                      </h1>
                      <p className="text-muted mb-10">
                        Basic info so we can reach you.
                      </p>

                      <div className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            {...register("name")}
                            className="w-full px-5 py-4 border-2 border-border rounded-xl bg-background focus:outline-none focus:border-foreground transition-colors"
                            placeholder="Your name"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            {...register("email")}
                            className="w-full px-5 py-4 border-2 border-border rounded-xl bg-background focus:outline-none focus:border-foreground transition-colors"
                            placeholder="you@example.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            {...register("phone")}
                            className="w-full px-5 py-4 border-2 border-border rounded-xl bg-background focus:outline-none focus:border-foreground transition-colors"
                            placeholder="+1 (555) 123-4567"
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="instagram" className="block text-sm font-medium mb-2">
                            Instagram <span className="text-muted">(optional)</span>
                          </label>
                          <input
                            id="instagram"
                            type="text"
                            {...register("instagram")}
                            className="w-full px-5 py-4 border-2 border-border rounded-xl bg-background focus:outline-none focus:border-foreground transition-colors"
                            placeholder="@yourhandle"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: About You */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="flex-1"
                    >
                      <h1 className="font-editorial text-3xl md:text-4xl mb-4">
                        A bit more about you
                      </h1>
                      <p className="text-muted mb-10">
                        Help us understand what you&apos;re looking for.
                      </p>

                      <div className="space-y-6">
                        <div>
                          <label htmlFor="referral" className="block text-sm font-medium mb-2">
                            How did you hear about us? <span className="text-muted">(optional)</span>
                          </label>
                          <input
                            id="referral"
                            type="text"
                            {...register("referral")}
                            className="w-full px-5 py-4 border-2 border-border rounded-xl bg-background focus:outline-none focus:border-foreground transition-colors"
                            placeholder="Friend, Instagram, event..."
                          />
                        </div>

                        <div>
                          <label htmlFor="why" className="block text-sm font-medium mb-2">
                            Why do you want to join West/PPL?
                          </label>
                          <textarea
                            id="why"
                            {...register("why")}
                            rows={5}
                            className="w-full px-5 py-4 border-2 border-border rounded-xl bg-background focus:outline-none focus:border-foreground transition-colors resize-none"
                            placeholder="Tell us what you're looking for in a community, what excites you about West/PPL, or anything else you'd like us to know..."
                          />
                          {errors.why && (
                            <p className="text-red-500 text-sm mt-2">{errors.why.message}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                <div className="pt-8 mt-auto">
                  <div className="flex items-center justify-between gap-4">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-foreground/90 transition-colors"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50"
                      >
                        {isSubmitting ? "Submitting..." : "Submit Application"}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {step === 3 && (
                    <p className="text-sm text-muted text-center mt-6">
                      By applying, you agree to our{" "}
                      <Link href="/terms" className="underline hover:text-foreground">
                        Terms
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="underline hover:text-foreground">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
