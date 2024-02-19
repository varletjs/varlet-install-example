import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletImportResolver } from '@varlet/import-resolver'

export default defineNuxtConfig({
  vite: {
    ssr: {
      noExternal: ['@varlet/ui']
    },

    plugins: [
      components({
        resolvers: [VarletImportResolver()],
        dts: true
      }),
      
      autoImport({
        resolvers: [VarletImportResolver({ autoImport: true })],
        dts: true
      })
    ]
  }
})

