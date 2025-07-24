import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: 'server',
  adapter: cloudflare(),
  vite: {
    resolve: {
      alias: {
        'react-dom/server': import.meta.env.PROD 
          ? 'react-dom/server.edge' 
          : 'react-dom/server'
      }
    }
  }
});