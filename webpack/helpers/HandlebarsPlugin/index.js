const projectRootPath = require("../path");
const HandlebarsPlugin = require("handlebars-webpack-plugin");
const path = require("path");
const data = require(path.resolve(projectRootPath, "src", "data", "data.json"));

const getHandlebarsPlugin = (names) => {
    return names.map((name) => {
        return new HandlebarsPlugin({
            data,
            entry: path.resolve(projectRootPath, "src", "pages", name, "*.handlebars"),
            getPartialId: function (filePath) {
                return filePath.split(path.resolve(projectRootPath, "src"))[1].replace('index.handlebars', '').slice(1,-1);
            },
            output: path.resolve(projectRootPath, "src", "pages", name, "index.html"),
            partials: [
                path.resolve(projectRootPath, "src", "**", "*.handlebars"),
            ],
        });
    });
}

module.exports = getHandlebarsPlugin;
