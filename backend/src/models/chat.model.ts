import { Schema, model } from 'mongoose'

import { MessageDoc, UserDoc } from '.'

export interface ChatDoc extends Document {
  chatName: string
  isGroupChat: boolean
  users: [UserDoc]
  latestMessage: MessageDoc
  groupAdmin: [UserDoc]
}

const ChatSchema = new Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    latestMessage: {
      type: Schema.Types.ObjectId,
      ref: 'Message'
    },
    groupAdmin: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ]
  },
  { timestamps: true }
)

export const Chat = model<ChatDoc>('Chat', ChatSchema)
