const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/js/index.js",
    output: {
        path:__dirname+ '/dist/',
        filename: "app.js",
        publicPath: '/'
    },
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
    plugins: [
      new HtmlWebpackPlugin({template: './src/index.html'})
    ]
}

