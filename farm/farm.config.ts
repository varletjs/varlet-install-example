import { defineConfig } from "@farmfe/core";
import vue from "@vitejs/plugin-vue";
import components from "unplugin-vue-components/vite";
import autoImport from "unplugin-auto-import/vite";
import { VarletUIResolver } from "unplugin-vue-components/resolvers";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  compilation: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
  vitePlugins: [
    vue(),

    components({
      resolvers: [VarletUIResolver()],
    }),

    autoImport({
      imports: ["vue"],
      resolvers: [VarletUIResolver({ autoImport: true })],
    }),
  ],
});
