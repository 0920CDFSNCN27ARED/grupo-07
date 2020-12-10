const path = require("path");

const usersController = {
    getRegister: (req, res) => {
        res.render(path.resolve(__dirname, "../views/users/register.ejs"));
    },
    getLogin: (req, res) => {
        res.render(path.resolve(__dirname, "../views/users/login.ejs"));
    }
};

module.exports = usersController;