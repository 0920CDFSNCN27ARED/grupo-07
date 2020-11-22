const express = require("express");
const router = express.Router();

const loginController = require("../controllers/login.js");

router.get("/", loginController.getLogin);

module.exports = router;
