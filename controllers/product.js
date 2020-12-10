const pathResolve = require("../utils/path-resolve.js")
const getProducts = require("../utils/get-products.js")
const saveToDB = require("../utils/save-to-db.js")


const productController = {

    showDetail: (req, res) => {
        const products = getProducts();
        const product = products.find((prod) => {
            return req.params.id == prod.id;
        })
        if (!product) {
            res.send("error")
        }
        res.render(pathResolve("../views/products/product.ejs"), {
            product: product
        })
    },

    showCreate: (req, res) => {
        res.render(pathResolve("../views/products/create.ejs"));
    },

    showEdit: (req, res) => {
        const products = getProducts();
        const requiredProduct = products.find((prod) => {
            return req.params.id == prod.id;
        })
        if (!requiredProduct) {
            res.send("error")
        }
        res.render(pathResolve("../views/products/edit.ejs"), {
            product: requiredProduct
        })
    },



    edit: (req, res, next) => {
        const products = getProducts();
        const {
            id
        } = req.params;

        const product = products.find(prod => {
            return prod.id == id;
        })

        product.name = req.body.name;
        product.price = req.body.price;
        product.description = req.body.description;
        product.releaseDate = req.body.releaseDate;

        product.specs.cpu = req.body.cpu;
        product.specs.gpu = req.body.gpu;
        product.specs.memory = req.body.memory;
        product.specs.storage = req.body.storage;

        product.logo = req.files[0].filename;
        product.mainImage = req.files[1].filename;
        product.shopImage = req.files[2].filename;

        product.category = req.body.category;


        saveToDB(products);

        res.redirect("/product/edit/1");
    },
    create: (req, res, next) => {
        const products = getProducts();

        const newProd = {
            id: products.length + 1,
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            releaseDate: req.body.releaseDate,
            specs: {
                cpu: req.body.cpu,
                gpu: req.body.gpu,
                memory: req.body.memory,
                storage: req.body.storage,
            },
            logo: req.files[0].filename,
            mainImage: req.files[1].filename,
            shopImage: req.files[2].filename,

            category: req.body.category,
        };
        products.push(newProd);
        saveToDB(products);

        res.redirect("/product/create")

    }
};

module.exports = productController;