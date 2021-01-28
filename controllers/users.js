const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");

const getUsers = require("../utils/get-users");
const saveUsers = require("../utils/save-users");
const newUserID = require("../utils/new-user-id");

const {
    check,
    validationResult,
    body
} = require("express-validator");


const usersController = {
    getRegister: (req, res) => {
        res.render(path.resolve(__dirname, "../views/users/register.ejs"));
    },
    getLogin: (req, res) => {
        res.render(path.resolve(__dirname, "../views/users/login.ejs"));
    },
    register: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log(errors)
            res.render(path.resolve(__dirname, '../views/users/register.ejs'), {
                errors: errors.errors
            })

        } else {
            // 
            const users = getUsers();
            const userID = newUserID();

            delete req.body.pass_confirm;

            let filename = req.file.filename ? req.file : product.logo;

            const newUser = {
                id: userID,
                ...req.body,
                pass: bcrypt.hashSync(req.body.pass, 12),
                avatar: req.file.filename
            }

            users.push(newUser);
            saveUsers(users);

            res.redirect("/users/login")
        }
    },
    login: (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log(errors)
            return res.render(path.resolve(__dirname, "../views/users/login.ejs"), {
                errors: errors.errors
            })
        } else {
            const users = getUsers();
            const user = users.find((user) => {
                return (
                    user.username == req.body.username &&
                    bcrypt.compareSync(req.body.pass, user.pass)
                );
            });

            if (!user) return res.redirect("/users/login");

            req.session.loggedUserId = user.id;
            if (req.body.recordame != undefined) {
                res.cookie("recordame", req.session.loggedUserId, {
                    maxAge: 60000
                })
            }
            console.log(req.session)

            return res.redirect("/");
        }
    },
    logout: (req, res) => {
        if (res.locals.user) {
            delete res.locals.user;
        }
        return res.redirect("/")
    }
}

module.exports = usersController;