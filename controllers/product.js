const path = require("path");

const productController = {
    getTemplate: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/product.html"));
    },
};

module.exports = productController;
