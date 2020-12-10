const path = require("path");

module.exports = function pathResolve(string) {

    return path.resolve(__dirname, string)
};