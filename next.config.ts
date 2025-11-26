import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "standalone",
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
    },
  },
  images: {
    domains: ["kimchiapp.info", "simbaapp.info", ".giftmond.ir"],
  },
  // output: "export", // important for static export
  // basePath: isProd ? "/hotflix" : "",
  // assetPrefix: isProd ? "/hotflix/" : "",
};

export default nextConfig;
