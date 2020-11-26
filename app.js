const express = require("express");
const app = express();
const path = require("path");

app.listen(3030, () => "Server is running in port 3030");
app.use(express.static("public"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const mainRoutes = require("./routes/main.js");
app.use("/", mainRoutes);

const categoriesRoutes = require("./routes/categories.js");
app.use("/categories", categoriesRoutes);
const productRoutes = require("./routes/product.js");
app.use("/product", productRoutes);
const shopRoutes = require("./routes/shop.js");
app.use("/shop", shopRoutes);

const registerRoutes = require("./routes/register.js");
app.use("/register", registerRoutes);
const loginRoutes = require("./routes/login.js");
app.use("/login", loginRoutes);

app.get("*", (req, res) => {
    res.status(404).send("No hay nada por aquí");
});
