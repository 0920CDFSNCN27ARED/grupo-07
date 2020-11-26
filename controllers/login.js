const path = require("path");

const loginController = {
    getLogin: (req, res) => {
        res.render(path.resolve(__dirname, "../views/login.ejs"));
    },
};

module.exports = loginController;
