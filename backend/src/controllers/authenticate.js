const jwt = require("jsonwebtoken")
const User = require("../models/UserSchema.js")
const bcryptjs = require("bcryptjs")
const { BadRequestError } = require("../errors/customError.js")

async function login(req, res) {
  const checkUser = await User.findOne({ username: req.body.username })
  if (!checkUser)
    throw new BadRequestError("user does not exist")
  if (!bcryptjs.compareSync(req.body.password, checkUser.password))
    throw new BadRequestError("incorrect password")
  const tokenData = {
    id: checkUser._id,
    exp: Math.floor(Date.now() / 1000) + Number(process.env.EXPIRES_IN),
  }
  const token = jwt.sign(tokenData, process.env.SECRET_KEY)
  console.log(token)
  res.json({ success: true, token: token, username: checkUser.username, })
}
async function signup(req, res) {
  const password = bcryptjs.hashSync(req.body.password)
  const user = await User.create({
    username: req.body.username,
    password: password
  })
  await user.save();
  const tokenData = {
    username: user.username,
    id: user._id,
    exp: Math.floor(Date.now() / 1000) + Number(process.env.EXPIRES_IN),
  }
  const token = jwt.sign(tokenData, process.env.SECRET_KEY)
  res.json({ success: true, token: token, username: req.body.username })
}
module.exports = { login, signup }
