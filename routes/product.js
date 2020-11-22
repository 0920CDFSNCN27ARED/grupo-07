const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.js");

router.get("/", productController.getTemplate);

module.exports = router;
