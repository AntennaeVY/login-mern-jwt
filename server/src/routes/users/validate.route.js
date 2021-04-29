const { Router } = require("express");
const router = Router();
const controller = require("../../controllers/users/validate.get.controller");

router.get("/users/validate", controller);

module.exports = router;
