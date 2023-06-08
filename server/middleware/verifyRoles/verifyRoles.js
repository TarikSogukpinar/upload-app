import { StatusCode } from 'http-status-codes'

const verifyRoles = (roleName) => {
  return (req, res, next) => {
    if (req.user.roles === roleName) {
      next()
    } else {
      return res
        .status(StatusCode.UNAUTHORIZED)
        .json({ error: true, message: 'You are not authorized!' })
    }
  }
}

export { verifyRoles }
