const path = require("path");

const shopController = {
    getShop: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/shop.html"));
    },
};

module.exports = shopController;
