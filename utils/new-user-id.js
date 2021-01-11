const getUsers = require("./get-users");

function newUserID() {
    const users = getUsers();

    const lastUserIndex = users.length - 1;
    const lastUser = users[lastUserIndex];

    return lastUser ? lastUser.id + 1 : 1;
}

module.exports = newUserID;