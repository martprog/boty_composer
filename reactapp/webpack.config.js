const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: 
        [path.join(__dirname, "./src/index.css"),
        path.join(__dirname, "./src/index.js")],
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "bundle.js",
    },
    devServer: {
        port: 8000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimize: true,
    },
    stats:{
        errorDetails: true
    },
    plugins: [
        
        
            new MiniCssExtractPlugin({
                filename: "bundle.css",
            }),
        
    ],
};
