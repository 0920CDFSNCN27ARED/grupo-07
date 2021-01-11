const fs = require("fs");
const path = require("path");

function saveUsers(users) {
    const usersJSON = JSON.stringify(users, null, 2)
    fs.writeFileSync(path.resolve(__dirname, "../db/users-db.json"), usersJSON)
};

module.exports = saveUsers;