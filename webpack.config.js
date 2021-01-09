const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        roots: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'src', 'components'),
            path.resolve(__dirname, 'src', 'img'),
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
                        plugins: ["@babel/plugin-proposal-class-properties"],
                        presets: ["@babel/preset-env"]
                    },
                },
            },
            //less
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
            },
            //css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            //images
            {
                test: /\.(png|svg|jpg)$/,
                use: [
                    'file-loader',
                ],
            },
            //fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
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
            template: "index-hbs-compiled.html",
            title: "My app",
        }),
        new HandlebarsPlugin({
            data: require('./src/data/data.json'),
            getPartialId: function (filePath) {
                const relativePath = filePath
                    .split("components/")[1]
                    .split(".handlebars")[0];
                const pathsArray = relativePath.split('/');
                const id = pathsArray.slice(-2).join('/');
                console.log('id')
                console.log(id)

                return id;
            },
            entry: path.resolve(__dirname, "src", "index.handlebars"),
            output: path.resolve(__dirname, "[name]-hbs-compiled.html"),
            partials: [
                path.resolve(__dirname, "src", "components", "**", "*.handlebars"),
            ],
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],
};
