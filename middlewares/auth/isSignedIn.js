function isSignedIn(req, res, next) {
    if (!res.locals.user) {
        res.redirect("/auth/login");
    } else {
        next();
    }
}

module.exports = isSignedIn;