import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import pages from 'vite-plugin-pages'
import { VarletImportResolver } from '@varlet/import-resolver'
import { visualizer } from 'rollup-plugin-visualizer'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    visualizer({ open: true }),

    components({
      resolvers: [VarletImportResolver()],
    }),
    
    autoImport({
      imports: ['vue'],
      resolvers: [VarletImportResolver({ autoImport: true })],
    }),

    pages()
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  test: {
    environment: 'jsdom',
    deps: {
      inline: ['@varlet/ui']
    }
  }
})
