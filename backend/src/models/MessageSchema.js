const { model, Schema, ObjectId } = require("mongoose")

const MessageSchema = new Schema({
  authorId: {
    type: ObjectId,
    required: [true, "author id required to compose message"]
  },
  recipientId: {
    type: ObjectId,
    required: [true, "recipient id required to compose message"]
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

module.exports = model("Message", MessageSchema)
