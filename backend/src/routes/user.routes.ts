import { Router } from 'express'
import { getUsers } from '../controller'

class UserRoutes {
  router: Router
  constructor() {
    this.router = Router()
    this.routes()
  }

  routes() {
    this.router.get('/', getUsers)
  }
}

export const userRoutes = new UserRoutes().router
