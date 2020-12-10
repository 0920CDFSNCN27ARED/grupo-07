const fs = require("fs");

function saveToDB(toSave) {
    const productsJSON = JSON.stringify(toSave)
    fs.writeFileSync("products-db.json", productsJSON)
};

module.exports = saveToDB;