const path = require("path");

const mainController = {
    getHome: (req, res) => {
        res.render(path.resolve(__dirname, "../views/index.ejs"));
    },
};

module.exports = mainController;
