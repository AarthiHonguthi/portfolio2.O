import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  base: "/portfolio2.O/", // <-- Add this line for GitHub Pages
  site: "https://AarthiHonguthi.github.io/portfolio2.O/",

  integrations: [tailwind(), sitemap(), react()],

  build: {
    assets: "assets",
  },
  vite: {
    build: {
      assetsDir: "assets",
    },
  },
});
