// open-next.config.ts

export default {
  // Required so OpenNext knows you're deploying to Cloudflare
  deploy: {
    platform: "cloudflare",
  },

  // Recommended (Cloudflare Workers require a date)
  compatibilityDate: "2024-01-01",

  // Recommended output directory for OpenNext build
  outDir: ".open-next",
};
