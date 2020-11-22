const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop.js");

router.get("/", shopController.getShop);

module.exports = router;
