const fs = require("fs");

function logger(req, res, next) {
    const url = req.originalUrl;
    fs.appendFileSync("./logs/logs.txt", `Se ingresó a ${url}\n`);
    next();
}

module.exports = logger;