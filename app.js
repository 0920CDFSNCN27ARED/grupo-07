const express = require("express");
const app = express();
const path = require("path");

app.listen(3030, () => "Server is running in port 3030");
app.use(express.static("public"));

//Para usar EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Para usar POST
// - todo aquello que llegue desde un formulario, queremos capturarlo en forma de objeto literal.
app.use(express.urlencoded({
    extended: false
}));
// - tenemos la posibilidad de convertir esa información en un formato json
app.use(express.json());

// Para usar PUT y DELETE
// npm install method-override
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Rutas + Controladores
const indexRoutes = require("./routes/index.js");
const categoriesRoutes = require("./routes/categories.js");
const productRoutes = require("./routes/product.js");
const shopRoutes = require("./routes/shop.js");
const usersRoutes = require("./routes/users.js");

app.use("/", indexRoutes);
app.use("/categories", categoriesRoutes);
app.use("/product", productRoutes);
app.use("/shop", shopRoutes);
app.use("/users", usersRoutes);

app.use((req, res, next) => {
    res.status(404).render(path.resolve(__dirname, "./views/not-found.ejs"));
    next();
});