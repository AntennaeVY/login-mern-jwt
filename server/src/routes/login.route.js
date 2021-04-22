const { Router } = require("express");
const router = Router();
const controller = require("../controllers/login.post.controller");
const validatorMiddleware = require("../helpers/login-validator.middleware");

router.post("/login", validatorMiddleware, controller);

module.exports = router;
