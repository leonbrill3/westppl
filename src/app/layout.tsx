import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "West/PPL - Where Culture Lives",
  description:
    "An elevated community for sizzling souls. Exclusive events, curated experiences, and deep connections across Miami, LA, and NYC.",
  keywords: [
    "west ppl",
    "community",
    "miami",
    "los angeles",
    "new york",
    "events",
    "exclusive",
    "members club",
    "social club",
    "culture",
  ],
  openGraph: {
    title: "West/PPL - Where Culture Lives",
    description:
      "An elevated community for sizzling souls. Exclusive events, curated experiences, and deep connections.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
