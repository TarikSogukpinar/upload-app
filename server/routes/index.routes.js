import authRoutes from './auth/auth.routes.js'
import userRoutes from './user/user.routes.js'
import uploadRoutes from './upload/upload.routes.js'

export function initRoutes(app) {
  app.use('/api/auth', authRoutes)
  app.use('/api/user', userRoutes)
  app.use('/api/upload', uploadRoutes)
}
