const { Router } = require("express");
const router = Router();
const controller = require("../../controllers/users/validate.get.controller");
const isAuth = require("../../helpers/isAuth.middleware");

router.get("/users/validate", isAuth, controller);

module.exports = router;
