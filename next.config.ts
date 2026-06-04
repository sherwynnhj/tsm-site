import type { NextConfig } from "next";

// On GitHub Pages the site is served from a subpath (username.github.io/<repo>),
// so the CI workflow sets NEXT_PUBLIC_BASE_PATH=/<repo>. Locally it's unset, so
// dev and `npm run build` keep working at the root (/).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export", // build a static site into ./out (index.html + assets)
  trailingSlash: true, // emit folder/index.html so links resolve when served statically
  basePath, // prefixes routes + the _next/ static chunks
  assetPrefix: basePath || undefined,
  images: {
    // Custom loader instead of `unoptimized` so basePath IS applied to image
    // URLs (unoptimized emits raw src and breaks on the Pages subpath).
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
};

export default nextConfig;
