const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    //mode: 'development',
    //devtool: 'none',
    entry: "./src/index.js",
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            //babel
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            //handlebars
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader",
            },
            //css
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/img',
                    to: 'img'
                },
            ],
        }),
        new HtmlWebpackPlugin({
            template: "hbs.index.html",
            title: "My app",
        }),
        new HandlebarsPlugin({
            entry: path.resolve(__dirname, "src", "*", "*.handlebars"),
            output: path.resolve(__dirname, "hbs.[name].html"),
            partials: [
                path.resolve(
                    __dirname,
                    "src",
                    "views",
                    "partials",
                    "*",
                    "*.handlebars"
                ),
            ],
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],
};
