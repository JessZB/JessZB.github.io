import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://jesszb.dev',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
    domains: ['picsum.photos', 'images.unsplash.com', 'lh3.googleusercontent.com'],
    remotePatterns: [{ protocol: 'https' }],
  },
  prefetch: {
    defaultStrategy: 'hover',
  },
});
