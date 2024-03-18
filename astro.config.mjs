import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), react(), icon({
    include: {
      mdi: ["*"], // (Default) Loads entire Material Design Icon set
      heroicons: ["*"],
    },
  }),],
  output: "server",
  adapter: vercel()
});