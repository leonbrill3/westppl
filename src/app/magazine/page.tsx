"use client";

import { Header } from "@/components/navigation/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const featuredArticle = {
  id: "the-art-of-slow-travel",
  title: "The Art of Slow Travel",
  excerpt:
    "Why the world's most discerning travelers are trading itineraries for immersion, discovering that true luxury lies in lingering.",
  category: "Travel",
  author: "Alexandra Chen",
  date: "March 2025",
  image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600",
  readTime: "8 min read",
};

const articles = [
  {
    id: "future-of-sustainable-fashion",
    title: "The Future of Sustainable Fashion",
    excerpt: "How luxury brands are redefining elegance through conscious design.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800",
    readTime: "6 min read",
  },
  {
    id: "wellness-retreats-2025",
    title: "Wellness Retreats Worth the Journey",
    excerpt: "From Bhutan to Patagonia, sanctuaries for the modern soul.",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
    readTime: "5 min read",
  },
  {
    id: "collectors-guide-contemporary-art",
    title: "A Collector's Guide to Contemporary Art",
    excerpt: "Navigating the art world with intention and insight.",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1541367777708-7905fe3296c0?w=800",
    readTime: "7 min read",
  },
  {
    id: "michelin-chefs-home-kitchens",
    title: "Inside the Home Kitchens of Michelin Chefs",
    excerpt: "Where the world's best cooks actually cook for themselves.",
    category: "Dining",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
    readTime: "9 min read",
  },
  {
    id: "architecture-of-solitude",
    title: "The Architecture of Solitude",
    excerpt: "Homes designed for quiet contemplation and peaceful retreat.",
    category: "Home",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    readTime: "6 min read",
  },
  {
    id: "new-era-private-aviation",
    title: "A New Era in Private Aviation",
    excerpt: "The innovations reshaping how the elite take to the skies.",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800",
    readTime: "5 min read",
  },
];

const categories = ["All", "Travel", "Fashion", "Wellness", "Dining", "Culture", "Home"];

export default function MagazinePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="pt-24 lg:pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-caps text-muted">West Mag</span>
            <h1 className="font-headline text-6xl lg:text-8xl mt-4">
              Stories Worth
              <br />
              Your Time
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="max-w-[1600px] mx-auto">
          <Link href={`/magazine/${featuredArticle.id}`}>
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 group"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover grayscale-hover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-caps text-muted">
                  {featuredArticle.category} · {featuredArticle.readTime}
                </span>
                <h2 className="font-headline text-4xl lg:text-6xl mt-4 group-hover:text-muted transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="font-body text-lg text-muted mt-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <span className="font-caps text-sm">
                    By {featuredArticle.author}
                  </span>
                  <span className="w-px h-4 bg-border" />
                  <span className="font-caps text-sm text-muted">
                    {featuredArticle.date}
                  </span>
                </div>
              </div>
            </motion.article>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 lg:px-12 pb-12 border-t border-border pt-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex gap-6 overflow-x-auto no-scrollbar">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`font-caps whitespace-nowrap ${
                  index === 0 ? "text-white" : "text-muted hover:text-white"
                } transition-colors`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/magazine/${article.id}`} className="group">
                  <div className="aspect-[4/3] relative overflow-hidden mb-4">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover grayscale-hover"
                    />
                  </div>
                  <span className="font-caps text-muted">
                    {article.category} · {article.readTime}
                  </span>
                  <h3 className="font-headline text-2xl mt-2 group-hover:text-muted transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-body text-muted mt-2 line-clamp-2">
                    {article.excerpt}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="btn-outline inline-flex items-center gap-2">
              Load More Articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-black text-white py-20 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto text-center">
          <span className="font-caps text-subtle">West Mag</span>
          <h2 className="font-headline text-4xl lg:text-5xl mt-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="font-body text-lg text-subtle mt-4 max-w-xl mx-auto">
            Curated stories, exclusive access, and members-only content delivered weekly.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mt-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-transparent border border-border-dark text-white placeholder:text-subtle font-body"
            />
            <button type="submit" className="btn-white">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 lg:px-12">
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
