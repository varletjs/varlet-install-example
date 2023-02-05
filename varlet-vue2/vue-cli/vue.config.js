const { defineConfig } = require('@vue/cli-service')
const Components = require('unplugin-vue-components/webpack')
const { VarletUIResolver } = require('unplugin-vue-components/resolvers')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [
          VarletUIResolver({
            version: 'vue2'
          })
        ],
        directives: true
      })
    ]
  }
})
