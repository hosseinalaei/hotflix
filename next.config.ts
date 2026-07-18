import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "kimchiapp.info" },
      { protocol: "http", hostname: "kimchiapp.info" },
      { protocol: "https", hostname: "simbaapp.info" },
      { protocol: "http", hostname: "simbaapp.info" },
      { protocol: "https", hostname: "**.giftmond.ir" },
      { protocol: "http", hostname: "**.giftmond.ir" },
      { protocol: "https", hostname: "movie.one-dev.ir" },
      { protocol: "http", hostname: "movie.one-dev.ir" },
      { protocol: "https", hostname: "**.dl175m.info" },
      { protocol: "http", hostname: "**.dl175m.info" },
    ],
  },
};

export default nextConfig;
