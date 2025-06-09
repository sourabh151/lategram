const { model, Schema } = require("mongoose")
const { MessageSchema } = require("../models/MessageSchema")
const ChatSchema = new Schema({
  authors: [Schema.Types.ObjectId],
  messages: [MessageSchema]
})

module.exports = {
  Chat: new model("Chat", ChatSchema),
  ChatSchema
}