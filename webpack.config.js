const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const publicPath = ''
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')


module.exports = {
  // body...
  entry: {
    index: ['./src/index.js'],
    count: ['./src/count.js'],
    utc: ['./src/utc.js']
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js'
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
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass?outputStyle=expanded')
      },
			{
        test: /\.(jpe?g|JPE?G|png|PNG|gif|GIF|svg|SVG)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=images/[name].[ext]'
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
    ]
  },

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

    // Gather entries' common code into one js file
    new CommonsChunkPlugin('common', 'common.js'),

    // Extract css and insert into html via <link src>
    new ExtractTextPlugin('style.css'),

    // Expose $, React... to global variable, also bundle them into output js file when use it in js file
    new webpack.ProvidePlugin({
      $: 'jquery',
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ]
}
