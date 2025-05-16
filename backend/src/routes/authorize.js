const { Router } = require("express");
const authorize = require("../controllers/authorize.js");
const router = Router();


router.all("", authorize)

module.exports = router;
