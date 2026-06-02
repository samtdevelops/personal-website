// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://samthomas.dev",

  markdown: {
      shikiConfig: {
          theme: "slack-ochin",
      },
  },

  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});