const path = require("path");

const indexController = {
    getHome: (req, res) => {
        res.render(path.resolve(__dirname, "../views/index.ejs"));
    },
};

module.exports = indexController;