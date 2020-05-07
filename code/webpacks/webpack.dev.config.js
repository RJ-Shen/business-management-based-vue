const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    // 入口，可以有多个入口
    entry: {
        "main":'./main.js'
    },
    output:{
        path:path.resolve('./dist'),
        filename:'./build.js'
    },
    mode:'development',
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              { loader: 'css-loader', options: { modules: true } }
            ]
          },
          {
             test:/\.(jpg|png|jpeg|gif|svg)$/,
             use:[
                 'url-loader?limit=60000'
             ] 
          },
          {
            test:/\.less$/,
            use:[
              'style-loader',
              'css-loader',
              'less-loader'
            ]
          },
          {
            test:/\.js$/,
            exclude: /node_modules/,
            use:[
              {loader:'babel-loader',
               options:{
                  presets:['env'], // 处理关键字的
                  plugins:['transform-runtime'] // 处理es6函数的
              }}
            ]
          },
          {
            test:/\.vue$/,
            use:[
              {loader: 'vue-loader'}
            ]
          }
          
        ]
      },
    plugins:[
      new HtmlWebpackPlugin({
        template:'./src/index.html'
      }),
      new VueLoaderPlugin()
    ],
    watch:true // 问价监视改动自动产生build.js
} 
// // const packageJson = require('./package.json')
// // const webpack = require('webpack')
// module.exports = {
//   entry:{
//     "main1": './src/main1.js',
//     "main2": './src/main2.js',
//     // "vendor":Object.keys(packageJson.dependencies)//获取生产环境依赖的库
//   },
//   output:{
//     path:path.resolve('./dist'),
//     filename:'[name].js'
//   },
//   mode:'development',
//   // 抽离公共文件
//   // plugins:[
//   //   new webpack.config.optimize.splitChunks({
//   //     name:['vender'],
//   //     filename:'[name].js'
//   //   })
//   // ],
//   watch:true
// }