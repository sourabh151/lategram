function logger(req, res, next) {
  console.log(req.url, req.method)
  console.log(req.body)
  next()
}

module.exports = logger
