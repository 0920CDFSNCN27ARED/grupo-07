const express = require("express");
const router = express.Router();

const categoriesController = require("../controllers/categories.js");

router.get("/playstation", categoriesController.getPlaystation);
router.get("/xbox", categoriesController.getXbox);
router.get("/nintendo", categoriesController.getNintendo);
router.get("/retro", categoriesController.getRetro);
router.get("/accesories", categoriesController.getAccesories);

module.exports = router;
