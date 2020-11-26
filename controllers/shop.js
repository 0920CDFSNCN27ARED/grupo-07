const path = require("path");

const shopController = {
    getShop: (req, res) => {
        res.render(path.resolve(__dirname, "../views/shop.ejs"));
    },
};

module.exports = shopController;
