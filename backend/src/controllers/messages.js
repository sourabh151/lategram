const { isValidObjectId } = require("mongoose")
const Message = require("../models/MessageSchema.js")
const User = require("../models/UserSchema.js")
const BadRequestError = require("../errors/customError.js")

const limit = 20;

async function getMessages(req, res) {
  const { recipient_id, page } = req.query
  if (page < 1)
    throw new BadRequestError("invalid page queried")
  //if (!recipient_id || !isValidObjectId(recipient_id))
  //  throw new Error("invalid recipient id")
  const recipient = await User.findById(recipient_id)
  if (!recipient)
    throw new BadRequestError("recipient does not exist")
  const messages = await Message.find({
    authorId: {
      $in: [req.user._id, recipient_id]
    },
    recipientId: {
      $in: [req.user._id, recipient_id]
    },
  }).sort({ "time": -1 }).skip((page - 1) * limit)
  return res.json({
    success: true,
    data: messages
  })

}
async function sendMessage(req, res) {
  const { recipient_id } = req.query
  const newMessage = await Message.create({
    authorId: req.user._id,
    recipientId: recipient_id,
    dataType: req.body.dataType,
    data: Buffer.from(req.body.data),
    time: new Date()
  })
  return res.status(201).json({
    success: true,
    data: newMessage
  })

}

module.exports = { getMessages, sendMessage }
