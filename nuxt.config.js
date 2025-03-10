export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      public: {
        graphqlEndpoint: process.env.NUXT_PUBLIC_GRAPHQL_URL || 'https://api.mygrillhouse.com/graphql', // Ensure this is the correct endpoint
        API_URL: process.env.NUXT_PUBLIC_API_URL || 'https://mygrillhouse.netlify.app', // Ensure this is the correct frontend URL
      }
    },
  },
  plugins: [
    '~/plugins/apollo.client.js',
  ],
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '@/assets/css/main.css',
  ],
  pageTransition: {
    name: 'page', // Name of the transition
    mode: 'out-in', // This ensures that the outgoing page fades out before the new page fades in
  },
  compatibilityDate: '2025-02-14',
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },    
    },
  },
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/assets/logo' }
    ]
  }
});
