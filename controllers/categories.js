const path = require("path");

const categoriesController = {
    getPlaystation: (req, res) => {
        res.render(
            path.resolve(
                __dirname,
                "../views/categories/playstation-category.ejs"
            )
        );
    },
    getXbox: (req, res) => {
        res.render(
            path.resolve(__dirname, "../views/categories/xbox-category.ejs")
        );
    },
    getNintendo: (req, res) => {
        res.render(
            path.resolve(__dirname, "../views/categories/nintendo-category.ejs")
        );
    },
    getRetro: (req, res) => {
        res.render(
            path.resolve(__dirnam, "../views/categories/retro-category.ejs")
        );
    },
    getAccesories: (req, res) => {
        res.render(
            path.resolve(
                __dirname,
                "../views/categories/accesories-category.ejs"
            )
        );
    },
};

module.exports = categoriesController;
