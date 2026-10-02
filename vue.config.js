const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  devServer: {
    historyApiFallback: {
      index: '/index.html',
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
      rewrites: [
        { from: /^\/projetos\/[^/]+\/?$/, to: '/index.html' }
      ]
    }
  },
  assetsDir: 'static'
})
