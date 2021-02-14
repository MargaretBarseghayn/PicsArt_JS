function Admin(id, firstName, lastName, username, url) {
    Account.apply(this, arguments)
}

Admin.prototype = Object.create(Account.prototype)
Admin.prototype.constructor = Admin


Admin.prototype.setGoldByUsername = function (username) {
    username.hasGold = true;
}
Admin.prototype.removeGoldByUsername = function (username) {
    username.hasGold = true;
}
Admin.prototype.blockUser = function (username) {
    username.isBlocked = true;
}
Admin.prototype.unblockUser = function (username) {
    username.isBlocked = true;
}
