import { NextFunction, Request, Response } from 'express'

import { userService } from '../services'
import { logger } from '../utils'

class UserController {
  getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = res.locals.user
      const result = await userService.getUsers(req, user)

      logger.info('Success get user data')
      return res.status(200).json({ data: result })
    } catch (err: any) {
      next(err)
    }
  }
}

export const { getUsers } = new UserController()
