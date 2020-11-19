const express = require("express");
const app = express();
const productsRoutes = require("./routes/products.js")

const path = require("path");

app.use(express.static("public"));

app.listen(3030, () => "Server is running in port 3030");

app.use("/productos", productsRoutes)

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/index.html"));
});
app.get("/product", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/product.html"));
});
app.get("/shop", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/shop.html"));
});
app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/register.html"));
});
app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/login.html"));
});
app.get("*", (req, res) => {
    res.status(404).send("No hay nada por aquí");
});


