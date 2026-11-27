export function handleNotFoundError (req,res,next) {
  const error = new Error('Invalid request on client side')
  error.status = 404
  next(error)
}

export function handleFinalError (err, req, res, next) {
  if (err.name === "CastError"){
    err.status = 400
    err.message = `Invalid id format: ${err.value}`
  }

  if (err.name === 'TokenExpiredError') {
    err.status = 401
    err.message = 'Token expired. Sign in again to continue'
  }

  if (err.name === 'JsonWebTokenError') {
    err.status = 401
    err.message = 'Token invalid. Access denied'
  }

  const status = err.status || 500
  console.log(err.message)
  
  res.status(status).json({
    error: true,
    name: err.name,
    status: err.status,
    type: status === 500 ? 'Internal Server Error' : 'Client side Error',
    msg: err.message
  })
  void next
  void req
}