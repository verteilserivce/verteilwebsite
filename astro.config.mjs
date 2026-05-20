// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://verteilservice-plus.de',
  output: 'static',

  server: {
    port: 3003,
  },

  adapter: cloudflare(),
});