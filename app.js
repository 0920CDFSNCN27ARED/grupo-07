const express = require("express");
const path = require("path");
const session = require("express-session")
const cookieParser = require("cookie-parser")
const logger = require("./middlewares/logger")
const authenticate = require("./middlewares/auth/authenticate")
const cookieAuth = require("./middlewares/auth/cookieAuth")
const methodOverride = require("method-override");

const app = express();

const indexRoutes = require("./routes/index.js");
const categoriesRoutes = require("./routes/categories.js");
const productRoutes = require("./routes/product.js");
const shopRoutes = require("./routes/shop.js");
const usersRoutes = require("./routes/users.js");

app.listen(3030, () => "Server is running in port 3030");
app.use(express.static("public"));

/// MIDDLEWARES

// Para usar POST
// - todo aquello que llegue desde un formulario, queremos capturarlo en forma de objeto literal.
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());
// Para usar PUT y DELETE
// npm install method-override
app.use(methodOverride("_method"));

app.locals.user = null;
app.use(logger);
app.use(cookieParser())
app.use(session({
    secret: "Shh!"
}));
app.use(cookieAuth)
app.use(authenticate);

//Para usar EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Controladores

app.use("/", indexRoutes);
app.use("/categories", categoriesRoutes);
app.use("/product", productRoutes);
app.use("/shop", shopRoutes);
app.use("/users", usersRoutes);

app.use((req, res, next) => {
    res.status(404).render(path.resolve(__dirname, "./views/not-found.ejs"));
    next();
});