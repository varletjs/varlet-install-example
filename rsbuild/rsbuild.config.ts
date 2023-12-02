import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import components from "unplugin-vue-components/rspack";
import autoImport from "unplugin-auto-import/rspack";
import { VarletUIResolver } from "unplugin-vue-components/resolvers";
export default defineConfig({
  plugins: [
    pluginVue(),
  ],
});
