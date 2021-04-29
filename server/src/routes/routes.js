const loginRoute = require("./login.route");
const logoutRoute = require("./logout.route");
const registerRoute = require("./register.route");
const validateRoute = require("./users/validate.route");

module.exports = [loginRoute, logoutRoute, registerRoute, validateRoute];
