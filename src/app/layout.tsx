import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "West/PPL - An Elevated Community",
  description:
    "An elevated community for sizzling souls to build lasting friendships, curate epic experiences, and share events in Miami, LA, and NYC.",
  keywords: [
    "west ppl",
    "community",
    "miami",
    "los angeles",
    "new york",
    "events",
    "exclusive",
    "members club",
  ],
  openGraph: {
    title: "West/PPL - An Elevated Community",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
