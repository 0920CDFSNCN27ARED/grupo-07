const path = require("path");

const categoriesController = {
    getCategories: (req, res) => {
        res.render(
            path.resolve(__dirname, "../views/products/categories.ejs")
        );
    }
};

module.exports = categoriesController;