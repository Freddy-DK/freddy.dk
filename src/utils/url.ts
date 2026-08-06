/**
 * Prefix an absolute site path with the configured base (e.g. "/freddy.dk/").
 * Use for every internal link and public/ asset so the site works both at the
 * domain root and under a GitHub Pages project subpath.
 *
 * External URLs (http/https/mailto/tel) are returned unchanged.
 */
export function withBase(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL; // configured in astro.config.mjs, e.g. "/freddy.dk/"
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
