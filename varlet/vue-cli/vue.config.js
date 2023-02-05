const { defineConfig } = require('@vue/cli-service')
const Components = require('unplugin-vue-components/webpack')
const AutoImport = require('unplugin-auto-import/webpack')
const { VarletUIResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      Components({
        resolvers: [VarletUIResolver()]
      }),
  
      AutoImport({
        resolvers: [VarletUIResolver({ autoImport: true })]
      })
    ]
  }
})
