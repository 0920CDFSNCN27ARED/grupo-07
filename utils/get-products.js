const fs = require("fs");
const path = require("path");

function getProducts() {
    const dbJson = fs.readFileSync(path.resolve(__dirname, "../products-db.json"), {
        encoding: "utf-8",
    });
    return JSON.parse(dbJson);
}

module.exports = getProducts;