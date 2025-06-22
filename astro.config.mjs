// @ts-check
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://SugarFreeDoNoSo.github.io",
  base: "/cv",
  integrations: [preact({ compat: true })],

  vite: {
    plugins: [tailwindcss()],
  },
});
