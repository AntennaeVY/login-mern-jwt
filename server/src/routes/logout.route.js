const { Router } = require("express");
const router = Router();
const controller = require("../controllers/logout.get.controller");
const isAuth = require("../helpers/isAuth.middleware");

router.get("/logout", isAuth, controller);

module.exports = router;
