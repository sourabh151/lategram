const { Schema, model } = require("mongoose");

const ChatSchema = require("./ChatSchema");
const bcryptjs = require("bcryptjs")


const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    chats: [ChatSchema],
  },
  { timestamps: true }
);

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcryptjs.hash(this.password, 10);
  }
  next();
});

const User = model("User", UserSchema);

module.exports = User;
