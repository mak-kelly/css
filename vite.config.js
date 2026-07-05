/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    eslint(),
    // Recommended plugins for SPA SEO:
    // 1. vite-plugin-sitemap: Auto-generates a sitemap.xml on build.
    //    Configure like:
    //    Sitemap({
    //      hostname: 'https://www.charlesstsupply.com',
    //      dynamicRoutes: ['/', '/about', '/services', '/plaster-washers', '/shop']
    //    })
    // 2. vite-plugin-prerender (or vite-prerender): Pre-renders React/dynamic routes into static HTML.
    //    This ensures crawlers that don't execute JS can read the site pages.
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer(),
      ],
    },
  },
});
