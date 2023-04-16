import { Document } from 'mongoose'
import { MessageDTO, UserDTO } from '.'

export interface ChatDTO extends Document {
  chatName: string
  isGroupChat: boolean
  users: [UserDTO]
  latestMessage: MessageDTO
  groupAdmin: [UserDTO]
}
