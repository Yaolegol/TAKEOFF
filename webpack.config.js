const {CleanWebpackPlugin} = require("clean-webpack-plugin");
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
    resolve: {
        roots: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'src', 'components'),
            path.resolve(__dirname, 'src', 'styles'),
        ],
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
            //css
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
            },
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            }
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
            template: "index-hbs-compiled.html",
            title: "My app",
        }),
        new HandlebarsPlugin({
            entry: path.resolve(__dirname, "src", "index.handlebars"),
            output: path.resolve(__dirname, "[name]-hbs-compiled.html"),
            partials: [
                path.resolve(__dirname, "src", "components", "**", "*.handlebars"),
            ],
            getPartialId: function (filePath) {
                const relativePath = filePath
                    .split("components/")[1]
                    .split(".handlebars")[0];
                const pathsArray = relativePath.split('/');
                const id = pathsArray.slice(-2).join('/');

                return id;
            }
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],
};
