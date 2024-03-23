import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), react(), icon({
    include: {
      mdi: ["*"],
      // (Default) Loads entire Material Design Icon set
      heroicons: ["*"]
    }
  }), sitemap()],
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  site: 'https://dev.dragonjay.top',
});