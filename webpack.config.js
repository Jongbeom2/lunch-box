'use strict'
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  // 웹팩이 빌드할 파일 (이 파일을 기준으로 import되어 있는 모든 파일을 찾아 하나의 파일로 합침)
  entry:{
    main:['./src/index.js']
  },
  // 웹팩에서 빌드를 완료하면 생성할 빌드 파일명과 생성할 위치
  output:{
    path: path.resolve(__dirname,'./build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname,'./src'),
        loaders: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[hash].[ext]",
          },
        },
      }
    ]
  },
  plugins:[
    new CopyWebpackPlugin([{
      context: './public',
      from: '*,*'
    }])
  ],
  devServer: {
    contentBase: './public',
    host: 'localhost',
    port: 8080
  }
}