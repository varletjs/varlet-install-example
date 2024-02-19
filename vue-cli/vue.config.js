const { defineConfig } = require('@vue/cli-service')
const Components = require('unplugin-vue-components/webpack')
const AutoImport = require('unplugin-auto-import/webpack')
const { VarletImportResolver } = require('@varlet/import-resolver')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    plugins: [
      Components.default({
        resolvers: [VarletImportResolver()]
      }),
  
      AutoImport.default({
        resolvers: [VarletImportResolver({ autoImport: true })]
      })
    ]
  }
})
