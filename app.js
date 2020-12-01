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
// - tenemos la posibilidad de convertir esa información en un formato json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Para usar PUT y DELETE
// npm install method-override

const methodOverride = require("method-override");
app.use(methodOverride("_method"));

// Rutas + Controladores
const mainRoutes = require("./routes/main.js");
const categoriesRoutes = require("./routes/categories.js");
const productRoutes = require("./routes/product.js");
const shopRoutes = require("./routes/shop.js");
const registerRoutes = require("./routes/register.js");
const loginRoutes = require("./routes/login.js");

app.use("/", mainRoutes);
app.use("/categories", categoriesRoutes);
app.use("/product", productRoutes);
app.use("/shop", shopRoutes);
app.use("/register", registerRoutes);
app.use("/login", loginRoutes);

app.use((req, res, next) => {
    res.status(404).render("/views/not-found");
});
