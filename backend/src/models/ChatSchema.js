const { model, Schema } = require("mongoose")
const ChatSchema = new Schema({
  authors: [Schema.types.ObjectId],
  messages: [MessageSchema]
})

module.exports = {
  Chat: new model("Chat", ChatSchema),
  ChatSchema
} 
