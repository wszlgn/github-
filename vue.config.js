const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
      '/home': {
        target: 'https://api.github.com',
        pathRewrite: {'^/home': ''},
        ws: true,
        changeOrigin: true
      },
     
    }
  }
})
