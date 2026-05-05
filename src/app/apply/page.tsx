"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { Button } from "@/components/ui/Button";
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

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
  });

  const selectedChapter = watch("chapter");

  const onSubmit = async (data: ApplicationForm) => {
    // TODO: Submit to API
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-24 px-6">
          <div className="max-w-2xl mx-auto text-center py-24">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-8"
            >
              <Check className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="font-editorial text-4xl mb-4">Application Received</h1>
            <p className="text-lg text-muted mb-8">
              Thank you for your interest in West/PPL. We&apos;ll review your
              application and get back to you soon.
            </p>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-24 px-6">
        <div className="max-w-2xl mx-auto py-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted hover:text-foreground mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>

          <h1 className="font-editorial text-4xl md:text-5xl mb-4">
            Apply to Join
          </h1>
          <p className="text-lg text-muted mb-12">
            West/PPL is an invite-only community. Tell us about yourself and
            why you&apos;d like to join.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Chapter Selection */}
            <div>
              <label className="block text-sm font-medium mb-4">
                Select Your Chapter *
              </label>
              <div className="grid grid-cols-3 gap-4">
                {chapters.map((chapter) => (
                  <button
                    key={chapter.id}
                    type="button"
                    onClick={() => setValue("chapter", chapter.id as Chapter)}
                    className={`p-4 border rounded-lg text-center transition-all ${
                      selectedChapter === chapter.id
                        ? "border-foreground bg-foreground text-background"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    <div className="font-medium">{chapter.name}</div>
                    <div className="text-xs opacity-70">{chapter.fullName}</div>
                  </button>
                ))}
              </div>
              {errors.chapter && (
                <p className="text-red-500 text-sm mt-2">{errors.chapter.message}</p>
              )}
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email *
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>
              )}
            </div>

            {/* Instagram */}
            <div>
              <label htmlFor="instagram" className="block text-sm font-medium mb-2">
                Instagram Handle
              </label>
              <input
                id="instagram"
                type="text"
                {...register("instagram")}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
                placeholder="@yourhandle"
              />
            </div>

            {/* Referral */}
            <div>
              <label htmlFor="referral" className="block text-sm font-medium mb-2">
                How did you hear about us?
              </label>
              <input
                id="referral"
                type="text"
                {...register("referral")}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground"
                placeholder="Friend, Instagram, event..."
              />
            </div>

            {/* Why */}
            <div>
              <label htmlFor="why" className="block text-sm font-medium mb-2">
                Tell us about yourself *
              </label>
              <textarea
                id="why"
                {...register("why")}
                rows={4}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground resize-none"
                placeholder="What brings you to West/PPL? What are you looking for in a community?"
              />
              {errors.why && (
                <p className="text-red-500 text-sm mt-2">{errors.why.message}</p>
              )}
            </div>

            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Submitting..." : "Submit Application"}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <p className="text-sm text-muted text-center">
              By applying, you agree to our{" "}
              <Link href="/terms" className="underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
