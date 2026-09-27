import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Impact was merged into About (timeline) and Home (stats)
      { source: "/impact", destination: "/about#our-work", permanent: true },
    ];
  },
};

export default nextConfig;
