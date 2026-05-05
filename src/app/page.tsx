"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { Header } from "@/components/navigation/Header";
import { CHAPTERS, type Chapter } from "@/types";

const chapters = Object.values(CHAPTERS);

const chapterImages: Record<Chapter, string> = {
  miami: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1800&q=80",
  la: "https://images.unsplash.com/photo-1515896769750-31548aa180ed?w=1800&q=80",
  nyc: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1800&q=80",
};

const featuredImages = [
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80",
  "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
];

export default function Home() {
  const [activeChapter, setActiveChapter] = useState<Chapter>("miami");
  const [currentWord, setCurrentWord] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const rotatingWords = ["souls", "creators", "visionaries", "dreamers"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header variant="transparent" />

      {/* Hero Section - Editorial Full Screen */}
      <section ref={heroRef} className="relative h-[100svh] overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChapter}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={chapterImages[activeChapter]}
                alt={CHAPTERS[activeChapter].name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ y: textY }}
          className="relative h-full flex flex-col justify-between pt-32 pb-12 px-6 lg:px-12"
        >
          {/* Top - Tagline */}
          <div className="max-w-[1400px] mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-caps text-white/80 mb-4"
            >
              A curated community
            </motion.p>
          </div>

          {/* Center - Main Headline */}
          <div className="max-w-[1400px] mx-auto w-full flex-1 flex items-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-editorial text-[clamp(3rem,12vw,10rem)] leading-[0.9] text-white"
            >
              For extraordinary{" "}
              <span className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWord}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    className="text-accent inline-block"
                  >
                    {rotatingWords[currentWord]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>
          </div>

          {/* Bottom - Chapter Selector & CTA */}
          <div className="max-w-[1400px] mx-auto w-full">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              {/* Chapter Pills */}
              <div className="flex flex-wrap gap-3">
                {chapters.map((chapter, i) => (
                  <motion.button
                    key={chapter.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    onClick={() => setActiveChapter(chapter.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeChapter === chapter.id
                        ? "bg-white text-foreground"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    {chapter.name}
                  </motion.button>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex gap-4"
              >
                <Link
                  href="/apply"
                  className="group flex items-center gap-3 bg-white text-foreground px-6 py-3 rounded-full font-medium transition-all hover:bg-cream"
                >
                  Apply to Join
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/events"
                  className="flex items-center gap-3 border border-white/30 text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-white/10"
                >
                  Explore
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"
          />
        </motion.div>
      </section>

      {/* Editorial Intro */}
      <section className="py-32 px-6 lg:px-12 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <p className="font-caps text-muted mb-6">The Mission</p>
              <h2 className="font-editorial text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
                Life&apos;s about the journey and the remarkable people you meet along the way
              </h2>
              <p className="text-lg text-muted leading-relaxed max-w-2xl">
                West/PPL is a members-only collective spanning Miami, Los Angeles, and New York.
                We curate extraordinary experiences—from intimate rooftop dinners to legendary
                Art Basel moments—for those who understand that the best things in life are better shared.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 lg:pt-24"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden image-zoom">
                    <Image
                      src={featuredImages[0]}
                      alt="Community"
                      width={400}
                      height={533}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6 bg-sand rounded-lg">
                    <p className="font-caps text-muted mb-2">Members</p>
                    <p className="font-editorial text-3xl">500+</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="p-6 bg-foreground text-background rounded-lg">
                    <p className="font-caps text-background/60 mb-2">Chapters</p>
                    <p className="font-editorial text-3xl">3</p>
                  </div>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden image-zoom">
                    <Image
                      src={featuredImages[1]}
                      alt="Events"
                      width={400}
                      height={533}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chapters Section - Horizontal Scroll Feel */}
      <section className="py-32 px-6 lg:px-12 bg-background">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <p className="font-caps text-muted mb-4">Our Chapters</p>
              <h2 className="font-editorial text-4xl md:text-5xl">Three cities, one tribe</h2>
            </div>
            <Link
              href="/about"
              className="hidden lg:flex items-center gap-2 text-sm font-medium link-underline mt-4 lg:mt-0"
            >
              Learn more about us
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {chapters.map((chapter, i) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Link href={`/${chapter.id}`} className="group block">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6">
                    <Image
                      src={chapterImages[chapter.id]}
                      alt={chapter.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div
                        className="w-3 h-3 rounded-full mb-4"
                        style={{ backgroundColor: chapter.color }}
                      />
                      <h3 className="font-editorial text-3xl text-white mb-2">
                        {chapter.name}
                      </h3>
                      <p className="text-white/70">{chapter.fullName}</p>
                    </div>

                    {/* Arrow */}
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-white">
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:text-foreground transition-colors" />
                    </div>
                  </div>

                  <p className="text-muted italic">&ldquo;{chapter.tagline}&rdquo;</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-32 bg-foreground text-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-caps text-background/60 mb-4">Experiences</p>
              <h2 className="font-editorial text-4xl md:text-5xl">Curated moments</h2>
            </div>
            <Link
              href="/events"
              className="hidden lg:flex items-center gap-2 text-sm font-medium text-background/70 hover:text-background transition-colors mt-4 lg:mt-0"
            >
              View all events
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative">
          <div className="flex animate-marquee">
            {[...featuredImages, ...featuredImages].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-[400px] mx-3">
                <div className="aspect-[3/4] rounded-xl overflow-hidden">
                  <Image
                    src={img}
                    alt={`Event ${i + 1}`}
                    width={400}
                    height={533}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-16">
          <div className="grid md:grid-cols-4 gap-8 pt-16 border-t border-background/10">
            {[
              { label: "Events per month", value: "12+" },
              { label: "Active members", value: "500+" },
              { label: "Brand partners", value: "25+" },
              { label: "Cities", value: "3" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-editorial text-4xl mb-2">{stat.value}</p>
                <p className="text-sm text-background/60">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Perks */}
      <section className="py-32 px-6 lg:px-12 bg-cream">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <p className="font-caps text-muted mb-4">Membership</p>
            <h2 className="font-editorial text-4xl md:text-5xl mb-6">More than just events</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Being part of West/PPL means access to a world of exclusive experiences,
              partnerships, and a network of extraordinary individuals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Curated Events",
                desc: "From intimate dinners to legendary parties, every gathering is thoughtfully designed.",
                icon: "01",
              },
              {
                title: "Brand Partnerships",
                desc: "Exclusive access to collaborations with premium brands and experiences.",
                icon: "02",
              },
              {
                title: "Global Network",
                desc: "Connect with like-minded individuals across all three chapters.",
                icon: "03",
              },
              {
                title: "Member Perks",
                desc: "VIP treatment at partner venues, restaurants, and hotels.",
                icon: "04",
              },
              {
                title: "Priority Access",
                desc: "First dibs on limited-capacity events and exclusive drops.",
                icon: "05",
              },
              {
                title: "Community",
                desc: "A supportive network that celebrates creativity and connection.",
                icon: "06",
              },
            ].map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-background rounded-xl hover:shadow-xl transition-all duration-500 card-hover"
              >
                <p className="font-caps text-accent mb-4">{perk.icon}</p>
                <h3 className="font-editorial text-2xl mb-3">{perk.title}</h3>
                <p className="text-muted">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={chapterImages.miami}
            alt="Join"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-caps text-background/60 mb-6">Join Us</p>
            <h2 className="font-editorial text-4xl md:text-6xl text-background mb-6">
              Ready to join something extraordinary?
            </h2>
            <p className="text-lg text-background/70 mb-10 max-w-xl mx-auto">
              West/PPL is invite-only. Apply now and become part of our growing
              community of remarkable individuals.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-3 bg-white text-foreground px-8 py-4 rounded-full font-medium text-lg transition-all hover:bg-cream hover:scale-105"
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 lg:px-12 bg-background border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link href="/" className="font-editorial text-3xl inline-block mb-6">
                west<span className="text-muted/50">/</span>ppl
              </Link>
              <p className="text-muted mb-6 max-w-sm">
                An elevated community for extraordinary souls. Miami. Los Angeles. New York.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/westppl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-sand flex items-center justify-center hover:bg-stone transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-2">
              <p className="font-caps text-muted mb-6">Chapters</p>
              <ul className="space-y-3">
                {chapters.map((chapter) => (
                  <li key={chapter.id}>
                    <Link
                      href={`/${chapter.id}`}
                      className="text-foreground/70 hover:text-foreground transition-colors"
                    >
                      {chapter.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="font-caps text-muted mb-6">Explore</p>
              <ul className="space-y-3">
                <li>
                  <Link href="/events" className="text-foreground/70 hover:text-foreground transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className="text-foreground/70 hover:text-foreground transition-colors">
                    Culture
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-foreground/70 hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="font-caps text-muted mb-6">Connect</p>
              <ul className="space-y-3">
                <li>
                  <Link href="/apply" className="text-foreground/70 hover:text-foreground transition-colors">
                    Apply
                  </Link>
                </li>
                <li>
                  <Link href="/sponsors" className="text-foreground/70 hover:text-foreground transition-colors">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="text-foreground/70 hover:text-foreground transition-colors">
                    Member Login
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <p className="font-caps text-muted mb-6">Legal</p>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacy" className="text-foreground/70 hover:text-foreground transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-foreground/70 hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} West/PPL. All rights reserved.
            </p>
            <p className="text-sm text-muted">
              Miami &bull; Los Angeles &bull; New York
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
