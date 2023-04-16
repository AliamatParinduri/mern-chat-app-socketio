import { Router } from 'express'
import { getUsers } from '../controller'
import { requireLogin } from '../middlewares/authorization'

class UserRoutes {
  router: Router
  constructor() {
    this.router = Router()
    this.routes()
  }

  routes() {
    this.router.get('/', requireLogin, getUsers)
  }
}

export const userRoutes = new UserRoutes().router
