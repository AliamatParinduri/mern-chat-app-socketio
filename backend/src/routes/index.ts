import { Application } from 'express'
import { userRoutes } from './user.routes'

const routes = (app: Application) => {
  app.use('/api/v1/users', userRoutes)
}

export default routes