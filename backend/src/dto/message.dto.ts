import { Document } from 'mongoose'
import { ChatDTO, UserDTO } from '.'

export interface MessageDTO extends Document {
  sender: UserDTO
  content: string
  chat: ChatDTO
}
