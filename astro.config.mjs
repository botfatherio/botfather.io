import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  redirects: {
    "/docs/legal/": "/imprint/",
    "/docs/legal/tos/": "/terms/",
    "/docs/legal/imprint/": "/imprint/",
    "/docs/legal/privacy/": "/privacy/",
  markdown: {
    remarkPlugins: [[remarkToc, { heading: "Table of contents", maxDepth: 3 }]],
  },
});
