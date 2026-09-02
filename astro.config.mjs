import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare'; 
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server', 
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});