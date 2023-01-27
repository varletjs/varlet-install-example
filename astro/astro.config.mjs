import vue from '@astrojs/vue';
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],

  vite: {
    ssr: {
      noExternal: ['@varlet/ui']
    },

    plugins: [
      components({
        resolvers: [VarletUIResolver()]
      }),
      autoImport({
        resolvers: [VarletUIResolver({ autoImport: true })]
      })
    ]
  }
});
