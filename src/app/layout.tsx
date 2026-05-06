import type { Metadata } from "next";
import { Bebas_Neue, Special_Elite } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const specialElite = Special_Elite({
  variable: "--font-typewriter",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "west | ppl - Elevated Community for Sizzling Souls",
  description:
    "West Ppl is an elevated community for sizzling souls to build lasting friendships, curate epic experiences, and share fun events in Miami, LA, and NYC.",
  keywords: [
    "west ppl",
    "elevated community",
    "miami",
    "los angeles",
    "new york",
    "west ave miami",
    "west hollywood",
    "west village",
    "curated experiences",
    "friendships",
    "events",
  ],
  openGraph: {
    title: "west | ppl",
    description:
      "An elevated community for sizzling souls to build lasting friendships and curate epic experiences.",
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
      className={`${bebasNeue.variable} ${specialElite.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
