// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Deployed as a GitHub Pages project site: https://freddy-dk.github.io/freddy.dk/
  site: 'https://freddy-dk.github.io',
  base: '/freddy.dk/',
  trailingSlash: 'always',
});
