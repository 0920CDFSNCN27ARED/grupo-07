const path = require("path");

const productController = {
    getTemplate: (req, res) => {
        res.render(path.resolve(__dirname, "../views/product.ejs"));
    },
};

module.exports = productController;
