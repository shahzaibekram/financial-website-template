import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    ['@nuxtjs/tailwindcss', {
      plugins: ['daisyui'],
    }],
    ['@vite-pwa/nuxt', {
      manifest: {
        name: 'My Financial Website',
        short_name: 'My Financial Website',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#000000',
      },
      workbox: {},
    }],
    '@nuxtjs/robots',
    '@nuxt/devtools',
    '@nuxtjs/i18n',
    'nuxt-icon'
  ],
  css: [
    '~/assets/css/tailwind.css',
  ],
  ssr: true,
});
