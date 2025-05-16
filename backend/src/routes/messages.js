const { Router } = require("express");
const { getMessages, sendMessage } = require("../controllers/messages.js");
const router = Router();


router.route("/").get(getMessages)
router.route("/").post(sendMessage)

module.exports = router;
