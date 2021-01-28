function isSignedIn(req, res, next) {
    if (!res.locals.user) {
        res.redirect("/users/login");
    } else {
        next();
    }
}

module.exports = isSignedIn;