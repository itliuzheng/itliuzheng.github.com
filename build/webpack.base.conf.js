'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
// let ExtractTextPlugin  = require("extract-text-webpack-plugin")
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}


// //解决history 地址指向 404 问题 中间件转换get请求
// var history = require('connect-history-api-fallback');
// var express = require('express');
// var web = express();
// web.use(history({
//     rewrites: [
//       {
//         from: /^\/sysuser|user|resources\/|approval\/|rule|loan|city|loan.*$/,
//         to: function(context) {
//           console.log('connect-history-api-fallback_____',context);
//             return context.parsedUrl.path
//         }
//       },
//     ],
//     htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
//   }));


module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    // app: './src/main.js'
    app: ["babel-polyfill","./src/main.js"]
  },
  // externals: {
  //   'vue':'Vue',
  //   'element-ui':'ElementUi'
  // },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath,
    libraryTarget:'umd'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        include: [
          resolve('src'),
          resolve('test'),
          resolve('node_modules/webpack-dev-server/client')
        ]
      },
      {
        test: /\.svg$/,
        loader:'svg-sprite-loader',
        include: [resolve('src/icon')],
        options: {
          symbolId:'icon-[name]'
        }
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  //性能优化视图
  // plugins:[
  //   // new BundleAnalyzerPlugin()
  //   new ExtractTextPlugin("./static/css/style.css")
  // ]
}
