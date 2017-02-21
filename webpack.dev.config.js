const webpack = require('webpack')
const path = require('path')
const publicPath = ''
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webPackMiddleware = 'webpack-hot-middleware/client?reload=true'
const DashboardPlugin = require('webpack-dashboard/plugin')

const postcss = require('postcss')
const sprites = require('postcss-sprites')
const updateRule = require('postcss-sprites/lib/core').updateRule
const autoprefixer = require('autoprefixer')

module.exports = {
  // body...
  entry: {
    index: ['./src/index.js', webPackMiddleware],
    count: ['./src/count.js', webPackMiddleware],
    utc: ['./src/utc.js', webPackMiddleware]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: publicPath
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        loader: 'babel-loader'
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.sass$/,
        loader: 'style!css!postcss!sass'
      },
			{
        test: /\.(jpe?g|JPE?G|png|PNG|gif|GIF|svg|SVG|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=[path][name].[ext]'
      },
			{
        test: /\.(eot|woff|ttf|svg|woff2)$/,
        loader: 'file?name=fonts/[name].[ext]'
      }
    ]
  },
  postcss: () => {
    return [
      autoprefixer
      // autoprefixer, sprites(opts)
    ]
  },

  devtool: 'cheap-module-eval-source-map',

  // 設定後只需要寫 require('file') 而不用寫成 require('file.jsx')
  resolve: {
    root: [
      path.join(__dirname, 'src')
    ],
    extensions: ['', '.js', '.jsx','css', '.sass']
  },

  plugins: [
    // Auto create html file from template and bundle different chunks js file to the html file
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.pug'),
      filename: 'index.html',
      chunks: ['index', 'common']
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'count.pug'),
      filename: 'count.html',
      chunks: ['count', 'common']
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'utc.pug'),
      filename: 'utc.html',
      chunks: ['utc', 'common']
    }),

    // Expose $, React... to global variable, also bundle them into output js file when use it in js file
    new webpack.ProvidePlugin({
      $: 'jquery',
      React: 'react',
      ReactDOM: 'react-dom'
    }),

    // new DashboardPlugin(dashboard.setData),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
