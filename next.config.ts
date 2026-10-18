import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The repo is checked out in more than one place; always treat this folder as the root
  turbopack: { root: __dirname },
  async redirects() {
    return [
      // Impact was merged into About (timeline) and Home (stats)
      { source: "/impact", destination: "/about#our-work", permanent: true },
      // Livelihood was retired as a program until there is real work (and photos) to show
      { source: "/programs/livelihood", destination: "/programs", permanent: true },
    ];
  },
};

export default nextConfig;
