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
  modules: ['@nuxt/devtools'],

  compatibilityDate: '2025-02-14'
});