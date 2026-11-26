import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import fs from "fs/promises";

export default defineConfig({
  site: "https://botfather.io",
  trailingSlash: "always",
  // Astro 7 defaults to "jsx", which drops meaningful spaces between inline elements.
  compressHTML: true,
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
  integrations: [
    sitemap({
      async serialize(item) {
        const url = new URL(item.url);

        const postSlugRegEx = /\/blog\/(.+)\//;
        const postSlugMatch = url.pathname.match(postSlugRegEx);

        if (postSlugMatch) {
          const postSlug = postSlugMatch[1];
          const postPath = `./src/content/posts/${postSlug}.md`;

          try {
            const postStat = await fs.stat(postPath);
            item.lastmod = postStat.mtime.toISOString();
          } catch {
            console.log("Skipping blog pagination page:", postSlug);
          }
        }

        return item;
      },
    }),
  ],
});
