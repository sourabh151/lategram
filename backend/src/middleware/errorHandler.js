const { StatusCodes } = require("http-status-codes")

function errorHandler(err, req, res, next) {
  if (err) {
    if (err.name === "JsonWebTokenError")
      err.statusCode = StatusCodes.FORBIDDEN
    else if (err.name === "TokenExpiredError")
      err.statusCode = StatusCodes.UNAUTHORIZED
    console.log(err)
    res.status(err.statusCode || 500).send(err.message)
  }
  else {
    next()
  }
}
module.exports = errorHandler
