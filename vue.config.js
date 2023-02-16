const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    resolve:{
      fallback: { 
        path: require.resolve("path-browserify"),
        // path: require.resolve("fs"),
      }
    },
    externals: {
      'electron': 'require("electron")'
    }
  }
})
