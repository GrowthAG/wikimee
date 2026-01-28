import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  base: '/lp-5-ferramentas',
  build: {
    assets: 'assets'
  }
});
