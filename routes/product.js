const express = require("express");
const path = require("path");
const multer = require("multer");
const isSignedIn = require("../middlewares/auth/isSignedIn")
const isAdmin = require("../middlewares/auth/isAdmin")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({
    storage: storage
})

const productController = require("../controllers/product.js");
const router = express.Router();

router.get("/list", productController.showAll)
router.get("/detail/:id", productController.showDetail);

router.get("/create", isSignedIn, productController.showCreate);
router.post("/create", upload.any(), productController.create);

router.get("/edit/:id", isSignedIn, isAdmin, productController.showEdit);
router.put("/edit/:id", upload.any(), productController.edit);

router.delete("/delete/:id", productController.delete)

module.exports = router;