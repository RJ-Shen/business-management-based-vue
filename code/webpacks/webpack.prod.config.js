const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 入口，可以有多个入口
    entry: {
        "main":'./main.js'
    },
    output:{
        path:path.resolve('./dist'),
        filename:'./build.js'
    },
    module:{
        rules:[
            // style-loader css-loader   
            // 遇到后缀名为css的文件，先用css-loader加载器
            // 去解析这个文件，让后使用style-loader生成解析完的代码
            // 在webpack中打包
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
                   'url-loader'
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
        new htmlWebpackPlugin({
            template:'./index.html'
        })
    ]
} 