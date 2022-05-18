import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  build: {
    transpile: ['@varlet/ui']
  }
})

