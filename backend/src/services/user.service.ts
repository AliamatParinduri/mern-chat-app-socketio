import { Request } from 'express'

import { userRepository } from '../repository'
import { UserDTO } from '../dto'

class UserService {
  getUsers = async (req: Request, user: UserDTO) => {
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: 'i' } },
            { email: { $regex: req.query.search, $options: 'i' } }
          ]
        }
      : {}

    return await userRepository.getUsers(keyword, user)
  }
}

export const userService = new UserService()
