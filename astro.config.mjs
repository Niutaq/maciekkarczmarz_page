// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// astro.build/config
export default defineConfig({
  site: "https://maciekkarczmarz.page",

  base: "/",

  image: {
    service: passthroughImageService(),
  },

  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
