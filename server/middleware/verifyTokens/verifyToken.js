import jwt from 'jsonwebtoken'
import StatusCode from 'http-status-codes'

const verifyToken = (req, res, next) => {
  const token = req.cookies.token

  if (!token) {
    return res
      .status(StatusCode.UNAUTHORIZED)
      .json({ error: true, message: 'Invalid Authentication.' })
  }
  try {
    const user = jwt.verify(token, process.env.PRIVATE_KEY)
    req.user = user

    next()
  } catch (error) {
    console.log(error)
    return res
      .status(StatusCode.INTERNAL_SERVER_ERROR)
      .json({ error: true, message: error.message })
  }
}

export { verifyToken }
