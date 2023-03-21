import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import pages from 'vite-plugin-pages'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vitest/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    visualizer({ open: true }),

    components({
      resolvers: [VarletUIResolver()],
    }),
    
    autoImport({
      resolvers: [VarletUIResolver({ autoImport: true })],
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
