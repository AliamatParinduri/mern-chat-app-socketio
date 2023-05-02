import { Application } from 'express'
import { userRoutes } from './user.routes'
import { authRoutes } from './auth.routes'
import { chatRoutes } from './chat.routes'
import { messageRoutes } from './message.routes'

const routes = (app: Application) => {
  app.use('/api/v1/auth', authRoutes)
  app.use('/api/v1/users', userRoutes)
  app.use('/api/v1/chat', chatRoutes)
  app.use('/api/v1/message', messageRoutes)
}

export default routes
