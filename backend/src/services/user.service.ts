import { userRepository } from '../repository'

class UserService {
  getUsers = async () => {
    return await userRepository.getUsers()
  }
}

export const userService = new UserService()
