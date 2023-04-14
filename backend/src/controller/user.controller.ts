import { NextFunction, Request, Response } from 'express'

import { userService } from '../services'
import { UnprocessableEntityError, logger } from '../utils'

class UserController {
  getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await userService.getUsers()

      logger.info('Success get user data')
      return res.status(200).json({ data: result })
    } catch (err: any) {
      next(err)
    }
  }
}

export const { getUsers } = new UserController()
