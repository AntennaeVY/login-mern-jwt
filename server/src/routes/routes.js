const loginRoute = require("./login.route");
const registerRoute = require("./register.route");
const validateRoute = require("./users/validate.route");

module.exports = [loginRoute, registerRoute, validateRoute];
