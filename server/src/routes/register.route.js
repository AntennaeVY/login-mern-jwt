const { Router } = require("express");
const router = Router();
const validatorMiddleware = require("../helpers/register-validator.middleware");
const controller = require("../controllers/register.post.controller");

router.post("/register", validatorMiddleware, controller);

module.exports = router;
