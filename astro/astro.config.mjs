import vue from '@astrojs/vue';
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletImportResolver } from '@varlet/import-resolver'
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
        resolvers: [VarletImportResolver()]
      }),
      autoImport({
        resolvers: [VarletImportResolver({ autoImport: true })]
      })
    ]
  }
});
