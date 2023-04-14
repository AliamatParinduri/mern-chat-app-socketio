import { InternalServerError, logger } from "../utils"

class UserRepository {
  getUsers = async () => {
   try {
     return true
   } catch (err: any) {
    logger.error("Error - get users ", err)
    throw new InternalServerError(err)
   }
  }
}

export const userRepository = new UserRepository()
