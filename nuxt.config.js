// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      graphqlEndpoint: 'http://localhost:1337/graphql', // Change to your actual endpoint
    },
  },
  plugins: [
    '~/plugins/apollo.client.js',
  ],

  // Optional, but useful
  modules: ['@nuxtjs/tailwindcss'], 
  css: [
    '@/assets/css/main.css',  // Ensure this is the path to your Tailwind CSS file
  ],

  compatibilityDate: '2025-02-14'
});