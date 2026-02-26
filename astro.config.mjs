// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// astro.build/config
export default defineConfig({
  site: "https://maciekkarczmarz.page",

  base: "/",

  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});
