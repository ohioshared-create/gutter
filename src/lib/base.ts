// Set by the GitHub Pages workflow when the site lives under /<repo>/ (empty locally and on a custom domain).
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefixes a file in /public with the base path (Next's <Link> does this itself; plain <img> doesn't). */
export const asset = (path: string) => `${basePath}${path}`;