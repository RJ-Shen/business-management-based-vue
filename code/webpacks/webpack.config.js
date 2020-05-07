const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
          }
          
        ]
      },
    plugins:[
      new HtmlWebpackPlugin({
        template:'./src/index.html'
      })
    ],
    watch:true // 问价监视改动自动产生build.js
} 