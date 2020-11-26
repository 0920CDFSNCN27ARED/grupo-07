const path = require("path");

const registerController = {
    getRegister: (req, res) => {
        res.render(path.resolve(__dirname, "../views/register.ejs"));
    },
};

module.exports = registerController;
