import { defineConfig } from 'astro/config';

// Static output — everything on this site is prerendered HTML,
// with small bits of client-side interactivity (expand/collapse rows).
export default defineConfig({
  output: 'static',
});
