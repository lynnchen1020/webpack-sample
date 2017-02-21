
const express = require('express')
const server = express()
const webpack = require('webpack')
const webpackConfig = require('./webpack.dev.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const DashboardPlugin = require('webpack-dashboard/plugin')
const compiler = webpack(webpackConfig)
compiler.apply(new DashboardPlugin())

const browserSync = require('browser-sync').create()

const port = 8080

// 將 webpack 傳入 webpack-dev-middleware 並套用至 app，同時傳入屬性，webpack 就可以被加載進來
server.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true
  }
}))

// 將 webpack 傳入 webpack-hot-middleware 並套用至 app，就可達到 HMR 的效果
server.use(webpackHotMiddleware(compiler))


// server.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'))
// })

// 監聽 port，並顯示錯誤或成功
server.listen(port, () => {
  console.log(`webpack dev server listening on port 8080!`)
    browserSync.init({
      open: 'local',
      ui: false,
      notify: false,
      proxy: `localhost:${port}`,
      files: ['./src/*.pug'],
      port: 3000
    })
    console.log(`browserSync is running on prot 3000`)
  })
