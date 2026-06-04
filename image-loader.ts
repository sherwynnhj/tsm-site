// Custom next/image loader for static export on GitHub Pages.
// `unoptimized: true` would emit raw src values that ignore basePath, so on a
// project Pages subpath (/tsm-site) every image 404s. This loader prepends the
// base path (injected at build time) so image URLs resolve correctly. Locally
// the var is unset, so URLs stay at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function imageLoader({ src }: { src: string }): string {
  // Leave absolute/remote URLs untouched; only prefix local /asset paths.
  if (/^https?:\/\//.test(src)) return src;
  return `${basePath}${src}`;
}
