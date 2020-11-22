const path = require("path");

const loginController = {
    getLogin: (req, res) => {
        res.sendFile(path.resolve(__dirname, "../views/login.html"));
    },
};

module.exports = loginController;
