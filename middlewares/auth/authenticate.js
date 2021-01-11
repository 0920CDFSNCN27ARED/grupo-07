const getUsers = require("../../utils/get-users");

function authenticate(req, res, next) {
    // El id que se encuentra en session
    const id = req.session.loggedUserId;

    // Si no hay id, ejecuto next()
    if (!id) return next();
    // Si hay id, obtengo todos los usuarios
    const users = getUsers();

    // Encuentro al usuario que matchee con el id en session
    const loggedUser = users.find((user) => {
        return user.id == id;
    });
    // Si no encuentra un usuario, borra el id en session y ejecuta next()
    if (!loggedUser) {
        delete req.session.loggedUserId;
        return next();
    }

    // req.loggedUser = loggedUser;
    res.locals.user = loggedUser;

    next();
}

module.exports = authenticate;