const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main.js");

router.get("/", mainController.getHome);

module.exports = router;
