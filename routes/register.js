const express = require("express");
const router = express.Router();
const registerController = require("../controllers/register.js");

router.get("/", registerController.getRegister);

module.exports = router;
