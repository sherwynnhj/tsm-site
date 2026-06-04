import type { NextConfig } from "next";

// On GitHub Pages the site is served from a subpath (username.github.io/<repo>),
// so the CI workflow sets PAGES_BASE_PATH=/<repo>. Locally it's unset, so dev
// and `npm run build` keep working at the root (/).
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export", // build a static site into ./out (index.html + assets)
  images: { unoptimized: true }, // next/image works without a server
  trailingSlash: true, // emit folder/index.html so links resolve when served statically
  basePath, // prefixes routes + next/image asset URLs for GitHub Pages
  assetPrefix: basePath || undefined, // prefixes the _next/ static chunks
};

export default nextConfig;
