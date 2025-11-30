export default {
  // REQUIRED for Cloudflare
  deploy: {
    platform: "cloudflare",
  },

  // OPTIONAL (recommended)
  compatibilityDate: "2024-01-01",

  // Optional output directory
  outDir: ".open-next",

  // Add Cloudflare bindings (KV, R2, D1...) here later if needed
};
