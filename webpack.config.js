const getHandlebarsPlugin = require("./webpack/helpers/HandlebarsPlugin");
const getHtmlWebpackPlugin = require("./webpack/helpers/HtmlWebpackPlugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const pages = ['home', 'second'];

module.exports = {
    entry: {
        home: "./src/pages/home/index.js",
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
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                        }
                    },
                    "less-loader"
                ],
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
        path: path.resolve(__dirname, "public"),
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
        ...getHtmlWebpackPlugin(pages),
        ...getHandlebarsPlugin(pages),
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
