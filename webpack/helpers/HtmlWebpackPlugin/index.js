const projectRootPath = require("../path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const indexFileName = 'index.html';

const getHtmlWebpackPlugin = (names) => {
    return names.map((name) => {
        const filename = name === 'home' ? indexFileName : `${name}/${indexFileName}`;
        const template = path.resolve(projectRootPath, "src", "pages", name, indexFileName);

        return new HtmlWebpackPlugin({
            chunks: [name],
            filename,
            template,
            title: "Takeoff",
        });
    });
}

module.exports = getHtmlWebpackPlugin;
