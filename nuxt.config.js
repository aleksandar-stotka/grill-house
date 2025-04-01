export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      SITE_URL: process.env.NUXT_PUBLIC_SITE_URL || "https://skara-house.com",
      API_URL: process.env.NUXT_PUBLIC_API_URL || "https://skara-house.com/api",  // ✅ Add this
    },
    gmailUser: process.env.NUXT_GMAIL_USER,
    gmailPass: process.env.NUXT_GMAIL_PASS
  },

  vite: {
    server: {
      allowedHosts: ['www.skara-house.com']
    }
  },

  plugins: [
    '~/plugins/apollo.client.js',
  ],

  target: 'static',

  generate: {
    fallback: '404.html' // Fixes 404 on reload
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/strapi' // ✅ Add Strapi module if using REST API
  ],

  strapi: {
    url: process.env.NUXT_PUBLIC_API_URL || "https://skara-house.com/api", // ✅ Use new API_URL
  },

  css: [
    '@/assets/css/main.css',
  ],

  output: 'static',

  experimental: {
    payloadExtraction: false
  },

  nitro: {
    prerender: {
      routes: ['/'] // Make sure the home page is included
    }
  },

  compatibilityDate: '2025-04-01'
});