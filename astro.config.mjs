import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  redirects: {
    "/docs/legal/": "/imprint/",
    "/docs/legal/tos/": "/terms/",
    "/docs/legal/imprint/": "/imprint/",
    "/docs/legal/privacy/": "/privacy/",
  },
});
