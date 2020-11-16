const express = require("express");
const app = express();

const path = require("path");

app.use(express.static("public"));

app.listen(3030, () => "Server is running in port 3030");

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/index.html"));
});
app.get("/product", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views/product.html"));
});

app.get("*", (req, res) => {
    res.status(404).send("No hay nada por aquí");
});
