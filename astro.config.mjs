// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Served from the custom domain at the root path.
  site: 'https://freddy.dk',
  base: '/',
  trailingSlash: 'always',
});
