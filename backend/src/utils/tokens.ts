import jwt from 'jsonwebtoken'

import { privateKey } from '../../config'
import { UserDTO } from '../dto'

export const generateToken = (user: UserDTO, options?: jwt.SignOptions | undefined) => {
  return jwt.sign(user, privateKey, {
    ...(options && options),
    algorithm: 'RS256'
  })
}
