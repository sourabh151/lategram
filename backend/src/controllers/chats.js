const { Chat } = require("../models/ChatSchema")
async function getChats(req, res) {
    const chats = req.user.chats
    console.log(chats);
}
module.exports = { getChats }
