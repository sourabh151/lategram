const { isValidObjectId } = require("mongoose")
const Message = require("../models/MessageSchema.js")
const User = require("../models/UserSchema.js")
const BadRequestError = require("../errors/customError.js");
const { Chat } = require("../models/ChatSchema.js");

const limit = 20;

async function getMessages(req, res) {
  const { chat_id, page } = req.query
  if (page < 1) {
    throw new BadRequestError("invalid page queried")
  }
  const chat = await Chat.findById(chat_id)
  if (!chat) {
    throw new BadRequestError("chat does not exist")
  }
  chat.populate({
    path: "messages",
    options: {
      sort: { "time": -1 },
      skip: (page - 1) * limit,
      limit: limit
    }
  })
  return res.status(200).json({
    success: true,
    data: chat.messages
  })
}
async function sendMessage(req, res) {
  const { chat_id, author_id } = req.query
  const newMessage = await new Message({
    authorId: author_id,
    chatId: chat_id,
    dataType: req.body.dataType,
    data: req.body.data,
    time: Date.now()
  })
  return res.status(201).json({
    success: true,
    data: newMessage
  })

}

module.exports = { getMessages, sendMessage }


// if (page < 1)
//   throw new BadRequestError("invalid page queried")
// //if (!recipient_id || !isValidObjectId(recipient_id))
// //  throw new Error("invalid recipient id")
// const recipient = await User.findById(recipient_id)
// if (!recipient)
//   throw new BadRequestError("recipient does not exist")
// const chats = await Chat.find({
//   authors:{
//     $in:[req.user._id,recipient_id]
//   }
// })
// const messages = await Message.find({
//   authorId: {
//     $in: [req.user._id, recipient_id]
//   },
//   recipientId: {
//     $in: [req.user._id, recipient_id]
//   },
// }).sort({ "time": -1 }).skip((page - 1) * limit)
// return res.json({
//   success: true,
//   data: messages
// })
