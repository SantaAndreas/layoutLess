const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    devServer: {
        port: 3001
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: ["file-loader"]
            }
        ]
    }
}