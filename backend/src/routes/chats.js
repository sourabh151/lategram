const { Router } = require("express");
const { getChats } = require("../controllers/chats.js");
const router = Router();


router.route("/").get(getChats)

module.exports = router;
