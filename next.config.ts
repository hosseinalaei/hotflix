import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["kimchiapp.info", "simbaapp.info"],
  },
  output: "export", // important for static export
  basePath: isProd ? "/hotflix" : "",
  assetPrefix: isProd ? "/hotflix/" : "",
};

export default nextConfig;
