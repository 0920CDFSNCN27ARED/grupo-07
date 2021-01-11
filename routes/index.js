const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index.js");
const authenticate = require("../middlewares/auth/authenticate")

router.get("/", authenticate, indexController.getHome);

module.exports = router;