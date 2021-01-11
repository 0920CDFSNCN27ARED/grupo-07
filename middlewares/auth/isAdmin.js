function isAdmin(req, res, next) {
    if (!res.locals.user.admin) {
        res.redirect("/");
    } else {
        next();
    }
}

module.exports = isAdmin;