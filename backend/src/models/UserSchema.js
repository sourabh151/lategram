const { Schema, model } = require("mongoose");
const ChatSchema = require("./ChatSchema");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: String,
    chats: [ChatSchema]
  }
)
const User = model("User", UserSchema);

module.exports = User
