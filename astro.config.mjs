// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://verteilservice-plus.de',
  output: 'static',
  server: {
    port: 3003,
  },
});
