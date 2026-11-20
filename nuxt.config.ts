export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  srcDir: 'app/',
  devtools: { enabled: true },
  experimental: { appManifest: false },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'My Profile',
      meta: [{ name: 'description', content: 'My personal profile website' }],
    },
  },
})