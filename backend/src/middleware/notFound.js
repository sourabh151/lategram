const { StatusCodes } = require("http-status-codes")
function notFound(req, res) {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: "404 Not Found"
  })
}
module.exports = notFound
