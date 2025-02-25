export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      graphqlEndpoint: process.env.NUXT_PUBLIC_GRAPHQL_URL || 'http://localhost:1337//graphql',
      API_URL: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:1337/',
    },
  },
  plugins: [
    '~/plugins/apollo.client.js',
  ],
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '@/assets/css/main.css',
  ],
  compatibilityDate: '2025-02-14'
});
