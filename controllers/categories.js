const path = require("path");

const categoriesController = {
    getPlaystation: (req, res) => {
        res.sendFile(
            path.resolve(
                __dirname,
                "../views/categories/playstation-category.html"
            )
        );
    },
    getXbox: (req, res) => {
        res.sendfile(
            path.resolve(__dirname, "../views/categories/xbox-category.html")
        );
    },
    getNintendo: (req, res) => {
        res.sendFile(
            path.resolve(
                __dirname,
                "../views/categories/nintendo-category.html"
            )
        );
    },
    getRetro: (req, res) => {
        res.sendFile(
            path.resolve(__dirnam, "../views/categories/retro-category.html")
        );
    },
    getAccesories: (req, res) => {
        res.sendFile(
            path.resolve(
                __dirname,
                "../views/categories/accesories-category.html"
            )
        );
    },
};

module.exports = categoriesController;
