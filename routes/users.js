const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const usersController = require("../controllers/users.js");
const getUsers = require("../utils/get-users.js");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/users')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({
    storage: storage
})

const users = getUsers();

const {
    check,
    validationResult,
    body
} = require("express-validator")

router.get("/register", usersController.getRegister);
router.post("/register", upload.single("avatar"), [
    check('firstName').isLength().withMessage("Este campo no puede estar vacío"),
    check('lastName').isLength(),
    check('age').isLength().isInt({
        min: 0,
        max: 99
    }).withMessage("Este campo no puede estar vacío"),
    check('tel').isMobilePhone(),
    check('address').isLength(),
    check('localidad').isLength(),
    check('city').isLength(),
    check('province').isLength(),

    check('username').isLength(),

    check('pass').isLength({
        min: 8
    }).withMessage("La contraseña debe tener un mínimo de 8 caracteres"),
    check('pass_confirm').isLength(),
    body('email').custom(value => {
        const foundUser = users.find(user => {
            return user.email == value
        })
        if (!foundUser) {
            return true;
        }
        return false;
        // for (let i = 0; i < users.length; i++) {
        //     if (users[i].email == value) {
        //         return false;
        //     }
        // }
    }).withMessage("El email ya está registrado en nuestra base de datos")
], usersController.register);

router.get("/login", usersController.getLogin);
router.post("/login", usersController.login);
router.post("/logout", usersController.logout)

module.exports = router;


// , [
//     check("username")
//     .isLength({
//         min: 3,
//         max: 10
//     }).withMessage("El campo debe tener un mínimo de 3 y un máximo de 8 carácteres"),
//     check("pass")
//     .isLength({
//         min: 3,
//         max: 10
//     }).withMessage("El campo debe tener un mínimo de 3 y un máximo de 8 carácteres")
// ]