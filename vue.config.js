/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const Timestamp = new Date().getTime()

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: 'dist',
  lintOnSave: true, //eslint开关
  productionSourceMap: false,
  // 禁止打包
  // 配置路径别名
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: '@import "@/theme/variables.scss";'
  //     }
  //   }
  // },

  // chainWebpack: config => {
  //   config.resolve.alias
  //     .set('Images', resolve('./src/assets/images'))
  //     .set('Styles', resolve('./src/assets/style'))
  //     .set('Components', resolve('./src/components'))
  //     .set('Plugins', resolve('./src/plugins'))
  // },

  // configureWebpack: {
  //   plugins: [
  //     //全局配置 underscore moment
  //     new webpack.ProvidePlugin({
  //       $_: 'underscore',
  //       $m: 'moment' //http://momentjs.cn/docs/#/use-it/node-js/
  //     })
  //   ],
  //   output: {
  //     // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
  //     filename: `[name].${Timestamp}.js`,
  //     chunkFilename: `[name].${Timestamp}.js`
  //   },
  //   optimization: {
  //     minimizer: [
  //       new UglifyJsPlugin({
  //         uglifyOptions: {
  //           compress: {
  //             // 去除 console
  //             drop_console: true
  //           },
  //           output: {
  //             // 去掉注释内容
  //             comments: false
  //           }
  //         },
  //         // 启用多线程
  //         parallel: true
  //       })
  //     ]
  //   }
  // },

  devServer: {
    open: true,
    proxy: {
      '/web': {
        // target: 'http://192.168.98.100:80',
        target: 'http://192.168.98.134:8003',
        // target: 'https://data-test.meiy365.com/api',
        changOrigin: true,
        ws: false,
        pathRewrite: {
          '^/web': ''
        }
      }
    }
  }
}
