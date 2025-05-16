const User = require("../models/UserSchema");
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../errors/customError");

async function authorize(req, res, next) {
  const token = req.get("Authorization").split(" ")[1];
  const user = jwt.verify(token, process.env.SECRET_KEY)
  if (!user.id || !mongoose.isValidObjectId(user.id))
    throw new UnauthorizedError("Invalid Token Provided")
  req.user = await User.findById(user.id)
  if (!req.user)
    throw new UnauthorizedError("Invalid token provided")
  next()
}

module.exports = authorize
