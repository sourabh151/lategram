const { model, Schema } = require("mongoose")

const MessageSchema = new Schema({
  authorId: {
    type: Schema.Types.ObjectId,
    required: [true, "author id required to compose message"]
  },
  chatId: {
    type: Schema.Types.ObjectId,
    required: [true, "chat id required to compose message"]
  },
  dataType: {
    type: String,
    enum: ["String", "Image"],
    required: true
  },
  data: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true
  }
})


module.exports = {
  Message: new model("Message", MessageSchema),
  MessageSchema
} 
