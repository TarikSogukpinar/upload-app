import { AppError } from '../../errors/AppError.js'

// eslint-disable-next-line no-unused-vars
export const errorHandler = (error, req, res, next) => {
  if (error.name === 'ValidationError') {
    return res.status(400).send({
      type: 'ValidationError',
      details: error.details,
    })
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).send({
      type: error.errorCode,
      message: error.message,
    })
  }

  return res.status(500).send('Something went wrong')
}
