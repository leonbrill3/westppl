"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { Button } from "@/components/ui/Button";
import { CHAPTERS, type Chapter } from "@/types";

const chapters = Object.values(CHAPTERS);

// Placeholder images - will be replaced with actual chapter imagery
const chapterImages: Record<Chapter, string> = {
  miami: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1200&q=80", // Beach/ocean
  la: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1200&q=80", // Palm trees
  nyc: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80", // Brownstones
};

export default function Home() {
  const [activeChapter, setActiveChapter] = useState<Chapter>("miami");

  return (
    <div className="min-h-screen bg-background">
      <Header variant="transparent" />

      {/* Hero Section - Full screen with chapter switcher */}
      <section className="relative h-screen">
        {/* Background Image */}
        <motion.div
          key={activeChapter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${chapterImages[activeChapter]})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end pb-20 px-6 max-w-7xl mx-auto">
          {/* Chapter Tabs */}
          <div className="flex gap-6 mb-8">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => setActiveChapter(chapter.id)}
                className={`text-sm font-medium transition-all ${
                  activeChapter === chapter.id
                    ? "text-white border-b-2 border-white pb-1"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {chapter.name.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Hero Text */}
          <motion.div
            key={`text-${activeChapter}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{CHAPTERS[activeChapter].fullName}</span>
            </div>

            <h1 className="font-editorial text-5xl md:text-7xl lg:text-8xl text-white mb-4 max-w-4xl">
              {CHAPTERS[activeChapter].tagline}
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
              An elevated community for sizzling souls to build lasting
              friendships, curate epic experiences, and share unforgettable
              moments.
            </p>

            <div className="flex gap-4">
              <Link href="/apply">
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  Apply to Join
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/events">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  View Events
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-editorial text-4xl md:text-5xl mb-6">
                Life&apos;s all about the journey and the people you meet
              </h2>
              <p className="text-lg text-muted mb-8">
                At West/PPL, we value deep connections, unforgettable moments,
                and exclusive perks. From Art Basel to rooftop sunsets, drum
                circles to fashion shows — we curate experiences that bring
                extraordinary people together.
              </p>
              <Link href="/about">
                <Button variant="outline">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Exclusive Events",
                  desc: "From intimate dinners to legendary parties",
                },
                {
                  title: "Three Chapters",
                  desc: "Miami, Los Angeles, and New York City",
                },
                {
                  title: "Member Perks",
                  desc: "VIP access, brand partnerships, and more",
                },
                {
                  title: "Global Network",
                  desc: "Connect with like-minded souls worldwide",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 border border-border rounded-lg hover:border-foreground transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                  <div>
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <p className="text-muted">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-editorial text-4xl md:text-5xl mb-4 text-center">
            Our Chapters
          </h2>
          <p className="text-center text-background/70 mb-16 max-w-2xl mx-auto">
            Three cities. One community. Endless possibilities.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {chapters.map((chapter, i) => (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <Link href={`/${chapter.id}`}>
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-lg">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${chapterImages[chapter.id]})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-editorial text-2xl text-white mb-1">
                        {chapter.name}
                      </h3>
                      <p className="text-white/70 text-sm">{chapter.fullName}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-editorial text-4xl md:text-5xl mb-6">
            Ready to join the journey?
          </h2>
          <p className="text-lg text-muted mb-8">
            West/PPL is invite-only. Apply now and become part of our growing
            community of extraordinary individuals.
          </p>
          <Link href="/apply">
            <Button size="lg">
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-editorial text-xl mb-4">west/ppl</h4>
              <p className="text-sm text-muted">
                An elevated community for sizzling souls.
              </p>
            </div>

            <div>
              <h5 className="font-medium mb-4">Chapters</h5>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <Link href="/miami" className="hover:text-foreground transition-colors">
                    Miami — West Ave
                  </Link>
                </li>
                <li>
                  <Link href="/la" className="hover:text-foreground transition-colors">
                    Los Angeles — West Hollywood
                  </Link>
                </li>
                <li>
                  <Link href="/nyc" className="hover:text-foreground transition-colors">
                    New York — West Village
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium mb-4">Magazine</h5>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <Link href="/events" className="hover:text-foreground transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/culture" className="hover:text-foreground transition-colors">
                    Culture
                  </Link>
                </li>
                <li>
                  <Link href="/west-nights" className="hover:text-foreground transition-colors">
                    West Nights
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-medium mb-4">Connect</h5>
              <ul className="space-y-2 text-sm text-muted">
                <li>
                  <Link href="/apply" className="hover:text-foreground transition-colors">
                    Apply
                  </Link>
                </li>
                <li>
                  <Link href="/sponsors" className="hover:text-foreground transition-colors">
                    Sponsors
                  </Link>
                </li>
                <li>
                  <a
                    href="https://instagram.com/westppl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
            <p>© {new Date().getFullYear()} West/PPL. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
