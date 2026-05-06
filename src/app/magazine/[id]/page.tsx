"use client";

import { Header } from "@/components/navigation/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Share2, Bookmark } from "lucide-react";
import { use } from "react";

const articles: Record<string, {
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
}> = {
  "the-art-of-slow-travel": {
    title: "The Art of Slow Travel",
    excerpt: "Why the world's most discerning travelers are trading itineraries for immersion.",
    content: [
      "In an age of instant gratification, where weekend trips to distant continents have become routine, a quiet revolution is taking place among the world's most seasoned travelers. They're not chasing passport stamps or Instagram moments. Instead, they're embracing a philosophy that feels almost radical: slow travel.",
      "The concept isn't new—it echoes the Grand Tours of the 18th century, when young aristocrats would spend months, even years, absorbing the culture, art, and languages of Europe. But today's slow travelers are redefining what it means to truly experience a place.",
      "Consider the approach of luxury travel advisors who now design journeys spanning weeks rather than days. A month in Provence, renting a stone farmhouse, shopping at local markets, learning to cook cassoulet from a grandmother in the village. Two weeks on the Amalfi Coast, staying in a family-run hotel where the owner becomes a friend.",
      "The psychology behind this shift is fascinating. Research shows that anticipation accounts for a significant portion of travel happiness, and memories are formed through depth of experience rather than breadth. A single perfect dinner, where conversation flows until midnight and the owner brings out a vintage bottle saved for special occasions, creates more lasting joy than a dozen rushed restaurant meals.",
      "Hotels and resorts are adapting. Properties are designing longer-stay programs with reduced rates, private cooking classes, and access to local artisans. The Four Seasons is pioneering 'residential experiences' where guests can live like locals for extended periods.",
      "Perhaps most compelling is what slow travel does for the destinations themselves. When visitors stay longer, they spend money in local economies rather than tourist traps. They form genuine connections with residents. They become ambassadors rather than observers.",
      "The irony isn't lost on those who've embraced this approach: in slowing down, they've discovered they can go further. Not in miles, but in meaning."
    ],
    category: "Travel",
    author: "Alexandra Chen",
    date: "March 2025",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600",
    readTime: "8 min read",
  },
  "future-of-sustainable-fashion": {
    title: "The Future of Sustainable Fashion",
    excerpt: "How luxury brands are redefining elegance through conscious design.",
    content: [
      "The fashion industry stands at a crossroads. For decades, luxury meant excess—endless collections, disposable trends, and a relentless pursuit of the new. But a fundamental shift is underway, driven not by regulation but by a new generation of consumers who demand more from the brands they love.",
      "Leading houses are responding with innovation that would have seemed impossible a decade ago. Stella McCartney continues to pioneer mushroom leather and recycled materials. Hermès has invested in lab-grown leather technology. Gucci has gone entirely fur-free.",
      "But the real revolution is happening in how we think about ownership itself. The luxury resale market is projected to grow faster than primary sales, with platforms like The RealReal and Vestiaire Collective becoming legitimate shopping destinations for the style-conscious.",
      "Designers are creating with longevity in mind. The concept of 'cost per wear' has entered the luxury conversation—a beautifully made coat worn for twenty winters represents far better value than a trendy piece discarded after a season.",
      "The most forward-thinking brands are embracing transparency. QR codes on garments reveal the entire supply chain: where the cotton was grown, who sewed the seams, the environmental impact of production. This radical openness is becoming a new form of luxury.",
      "Perhaps most encouraging is the creativity this constraint is unleashing. Designers forced to work within sustainable parameters are discovering new aesthetic possibilities. Recycled materials yield unexpected textures. Zero-waste pattern cutting produces innovative silhouettes."
    ],
    category: "Fashion",
    author: "Marcus Webb",
    date: "February 2025",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800",
    readTime: "6 min read",
  },
};

// Default article for any ID not in our list
const defaultArticle = {
  title: "Coming Soon",
  excerpt: "This article is being crafted by our editorial team.",
  content: [
    "Our team of writers and editors is currently working on this piece. We believe in taking the time to tell stories that matter, with the depth and nuance they deserve.",
    "Check back soon for the full article, or subscribe to our newsletter to be notified when new content is published."
  ],
  category: "Editorial",
  author: "West Mag Team",
  date: "2025",
  image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600",
  readTime: "5 min read",
};

export default function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const article = articles[id] || defaultArticle;

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Back Link */}
      <div className="pt-24 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <Link
            href="/magazine"
            className="inline-flex items-center gap-2 font-caps text-muted hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Magazine
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="px-6 lg:px-12 py-12">
        <div className="max-w-[900px] mx-auto">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="font-caps text-muted">
              {article.category} · {article.readTime}
            </span>
            <h1 className="font-headline text-5xl lg:text-7xl mt-4">
              {article.title}
            </h1>
            <p className="font-body text-xl text-muted mt-6 max-w-2xl mx-auto">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className="font-caps text-sm">By {article.author}</span>
              <span className="w-px h-4 bg-border" />
              <span className="font-caps text-sm text-muted">{article.date}</span>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-[16/9] relative overflow-hidden mb-12"
          >
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Actions */}
          <div className="flex justify-center gap-4 mb-12 border-b border-border pb-8">
            <button className="flex items-center gap-2 font-caps text-muted hover:text-white transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 font-caps text-muted hover:text-white transition-colors">
              <Bookmark className="w-4 h-4" />
              Save
            </button>
          </div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            {article.content.map((paragraph, index) => (
              <p
                key={index}
                className="font-body text-lg leading-relaxed mb-6 text-charcoal"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Author */}
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-dark-gray flex items-center justify-center">
                <span className="font-headline text-xl">
                  {article.author.split(" ").map(n => n[0]).join("")}
                </span>
              </div>
              <div>
                <p className="font-headline text-lg">{article.author}</p>
                <p className="font-caps text-muted">Contributing Writer</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 lg:px-12 mt-12">
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
