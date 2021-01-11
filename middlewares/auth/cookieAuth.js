const getUsers = require("../../utils/get-users");

function cookieAuth(req, res, next) {
    if (req.cookies.recordame != undefined && req.session.loggedUserId == undefined) {
        const users = getUsers();
        const loggedUser;
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            if (user.id == req.cookies.recordame) {
                loggedUser = user;
                break;
            }
        }
        req.session.loggedUser = loggedUser
    }
    next()
}