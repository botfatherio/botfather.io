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
    "/docs/player/": "/docs/guides/",
    "/docs/player/what-is-botfather/": "/docs/guides/what-is-botfather/",
    "/docs/wizard/": "/docs/guides/",
    "/docs/wizard/how-to-create-a-script/":
      "/docs/guides/how-to-create-a-script/",
    "/docs/wizard/simple-agario-bot-tutorial/":
      "/docs/guides/simple-agario-bot-tutorial/",
  },
  markdown: {
    remarkPlugins: [[remarkToc, { heading: "Table of contents", maxDepth: 3 }]],
    shikiConfig: {
      theme: "github-light",
    },
  },
});
