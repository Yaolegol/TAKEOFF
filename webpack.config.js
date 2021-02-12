const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: {
        index: "./src/pages/main/index.js",
        second: "./src/pages/second/index.js",
    },
    module: {
        rules: [
            // babel
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
            // less
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
            },
            // css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            // images
            {
                test: /\.(png|svg|jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            context: 'src',
                            name: '[path][name].[ext]',
                            emitFile: false,
                        }
                    }
                ],
            },
            // fonts
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts',
                        }
                    }
                ],
            },
            // handlebars
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            }
        ],
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/images',
                    to: 'images'
                },
            ],
        }),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename: "index.html",
            template: path.resolve(__dirname, "src", "app", "main-hbs-compiled.html"),
            title: "Takeoff",
        }),
        new HtmlWebpackPlugin({
            chunks: ['second'],
            filename: "second.html",
            template: path.resolve(__dirname, "src", "app", "second-hbs-compiled.html"),
            title: "Takeoff",
        }),
        new HandlebarsPlugin({
            data: require('./src/data/data.json'),
            entry: path.resolve(__dirname, "src", "pages", "main", "*.handlebars"),
            getPartialId: function (filePath) {
                return filePath.split(path.resolve(__dirname, "src"))[1].replace('index.handlebars', '').slice(1,-1);
            },
            output: path.resolve(__dirname, "src", "app", "[name]-hbs-compiled.html"),
            partials: [
                path.resolve(__dirname, "src", "**", "*.handlebars"),
            ],
        }),
        new HandlebarsPlugin({
            data: require('./src/data/data.json'),
            entry: path.resolve(__dirname, "src", "pages", "second", "*.handlebars"),
            getPartialId: function (filePath) {
                return filePath.split(path.resolve(__dirname, "src"))[1].replace('index.handlebars', '').slice(1,-1);
            },
            output: path.resolve(__dirname, "src", "app", "[name]-hbs-compiled.html"),
            partials: [
                path.resolve(__dirname, "src", "**", "*.handlebars"),
            ],
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],
    resolve: {
        modules: [
            path.resolve(__dirname, "src"),
            "node_modules"
        ],
    },
};
