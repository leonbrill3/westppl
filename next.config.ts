import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hide the dev-only on-screen indicator badge.
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
