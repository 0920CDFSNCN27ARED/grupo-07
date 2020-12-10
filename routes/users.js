const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.js");

router.get("/register", usersController.getRegister);
router.get("/login", usersController.getLogin);

module.exports = router;