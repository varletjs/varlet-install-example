import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  vite: {
    ssr: {
      noExternal: ['@varlet/ui']
    },

    plugins: [
      components({
        resolvers: [VarletUIResolver()]
      }),
      
      autoImport({
        resolvers: [VarletUIResolver({ autoImport: true })],
      })
    ]
  }
})

