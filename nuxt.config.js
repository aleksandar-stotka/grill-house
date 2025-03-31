  export default defineNuxtConfig({
    runtimeConfig: {
      public: {
        public: {
          SITE_URL: process.env.NUXT_PUBLIC_SITE_URL || 'https://skara-house.com'
        }
      },
      gmailUser: process.env.NUXT_GMAIL_USER,
      gmailPass: process.env.NUXT_GMAIL_PASS
    },
    
      vite: {
        server: {
          allowedHosts: ['www.skara-house.com']
        }
      },
<<<<<<< HEAD
      
=======
    
>>>>>>> 515513e (Update Nuxt app)
    plugins: [
      '~/plugins/apollo.client.js',
    ],
    target: 'static',
    generate: {
      fallback: '404.html' // Fixes 404 on reload

    },
    modules: ['@nuxtjs/tailwindcss'],
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
    routeRules: {
      '/**': { ssr: false } // Force Nuxt to behave like an SPA
    },
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
        { rel: 'icon', type: 'image/x-icon', href: '/assets/logo.jpg' }
      ]
    },
    runtimeConfig: {
      gmailUser: process.env.NUXT_GMAIL_USER,
      gmailPass: process.env.NUXT_GMAIL_PASS
    }
  });
<<<<<<< HEAD
=======


>>>>>>> 515513e (Update Nuxt app)
