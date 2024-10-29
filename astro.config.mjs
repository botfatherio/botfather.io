import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";
import sitemap from "@astrojs/sitemap";
import fs from "fs/promises";

// https://astro.build/config
export default defineConfig({
  site: "https://botfather.io",
  trailingSlash: "always",
  markdown: {
    remarkPlugins: [[remarkToc, { heading: "Table of contents", maxDepth: 3 }]],
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
