import jwt from 'jsonwebtoken'

import { privateKey, publicKey } from '../../config'
import { UserDTO } from '../dto'

export const generateToken = (user: UserDTO, options?: jwt.SignOptions | undefined) => {
  return jwt.sign(user, privateKey, {
    ...(options && options),
    algorithm: 'RS256'
  })
}

export const verifyToken = (token: string) => {
  return jwt.verify(token, publicKey)
}
