const getUsers = require("../../utils/get-users");

function cookieAuth(req, res, next) {
    if (req.cookies.rememberMe != undefined && req.session.loggedUserId == undefined) {
        const users = getUsers();
        let loggedUser;
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user.id == req.cookies.rememberMe) {
                loggedUser = user;
                break;
            }
        }
        req.session.loggedUser = loggedUser
    }
    next()
}

module.exports = cookieAuth