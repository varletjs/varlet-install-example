import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from '@farmfe/core'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  compilation: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
  vitePlugins: [
    vue(),
    components({
      resolvers: [VarletUIResolver()],
      dts: true,
    }),

    autoImport({
      imports: ['vue'],
      dts: true,
      resolvers: [VarletUIResolver({ autoImport: true })],
    }),
  ],
})
