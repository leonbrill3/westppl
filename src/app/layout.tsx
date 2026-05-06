import type { Metadata } from "next";
import { Bebas_Neue, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "WEST - The Members Platform by West Ave Group",
  description:
    "Exclusive access. Curated experiences. Elevated living. The members platform by West Ave Group.",
  keywords: [
    "west ave group",
    "west mag",
    "members club",
    "luxury experiences",
    "concierge",
    "miami",
    "los angeles",
    "new york",
    "exclusive events",
    "travel",
    "fashion",
    "wellness",
  ],
  openGraph: {
    title: "WEST - The Members Platform",
    description:
      "Exclusive access. Curated experiences. Elevated living.",
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
      className={`${bebasNeue.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
