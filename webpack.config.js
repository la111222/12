const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development', // development 开发模式 production 生产模式
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
         contentBase: './dist'
       },
       plugins: [
             new HtmlWebpackPlugin({
               template:path.join(__dirname,'./dist/index.html'),
               filename:'index.html'
             })
           ],
    module: {
    rules: [ // 第三方匹配规则
            {test: /\.js|jsx$/,use: 'babel-loader',exclude: /node_modules/},
            {
                       test: /\.css$/,
                       use: [
                         'style-loader',
                         'css-loader'
                       ]
                     }
        ]
    }
};