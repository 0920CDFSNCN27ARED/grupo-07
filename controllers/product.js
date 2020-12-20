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

        // Guarda el producto requerido
        const product = products.find(prod => {
            return prod.id == id;
        })

        // if(req.files){
        //     filename = req.file;
        // }
        // else if (!req.files.filename){
        //     if(req.files.filename == product.logo){
        //         file 
        //     }
        // }
        // let filename = req.file[0].filename ? req.file : product.logo;
        
        product.logo = req.files[0].filename;
        product.mainImage = req.files[1].filename;
        product.shopImage = req.files[2].filename;
        
        product.name = req.body.name;
        product.price = req.body.price;
        product.description = req.body.description;
        product.releaseDate = req.body.releaseDate;

        product.specs.cpu = req.body.cpu;
        product.specs.gpu = req.body.gpu;
        product.specs.memory = req.body.memory;
        product.specs.storage = req.body.storage;


        product.category = req.body.category;

        // database.splice(database.indexOf(selectedProduct), 1, editedProduct)

        saveToDB(products);

        res.redirect("/");
    },
    create: (req, res, next) => {
        const products = getProducts();

        const newProd = {
            id: products[products.length - 1].id + 1,
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

    },
    search: (req, res) => {
        let products = getProducts()
        let words = req.query.keywords.split(" ");
        let productsMatch = [];
        products.forEach(product => {
            words.forEach(word => {
                if (product.name.includes(word)) {
                    productsMatch.push(product)
                }
            });
        });
        res.render("results", {products: productsMatch, search: words})  
    },
}
        module.exports = productController;