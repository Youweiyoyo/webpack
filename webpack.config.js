const path = require("path");
//导入包
const HtmlWebpackPlugin = require("html-webpack-plugin");
//创建对象
const htmlPlugin = new HtmlWebpackPlugin({
  //设置生成预览页面的模板文件
  template: "./src/index.html",
  //设置生成的预览页面名称
  filename: "index.html"
});
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  //可以设置为development(开发模式)，production(发布模式)
  mode: "development",
  entry: path.join(__dirname, "./src/index.js"),
  //设置出口文件
  output: {
    //设置路径
    path: path.join(__dirname, "./dist"),
    //设置文件名
    filename: "bundle.js"
  },
  plugins: [htmlPlugin, new VueLoaderPlugin()],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
      { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, use: 'url-loader?limit=17000' },
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  }

}
