const { StatusCodes } = require("http-status-codes")
class CustomError extends Error {
  statusCode = 500;
  message = ""
  constructor(s, m) {
    super()
    this.statusCode = s
    this.message = m
  }
}
class UnauthorizedError extends CustomError {
  constructor(m) {
    super()
    this.statusCode = StatusCodes.UNAUTHORIZED
    this.message = m;
  }
}
class BadRequestError extends CustomError {
  constructor(m) {
    super()
    this.statusCode = StatusCodes.BAD_REQUEST
    this.message = m;
  }
}
class NotFoundError extends CustomError {
  constructor(m) {
    super()
    this.statusCode = StatusCodes.NOT_FOUND
    this.message = m;
  }
}
module.exports = { CustomError, UnauthorizedError, BadRequestError, NotFoundError }
