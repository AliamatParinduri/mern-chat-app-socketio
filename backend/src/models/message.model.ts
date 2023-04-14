import { Schema, model } from 'mongoose'

import { ChatDoc, UserDoc } from '.'

export interface MessageDoc extends Document {
  sender: UserDoc
  content: string
  chat: ChatDoc
}

const MessageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    content: { type: String },
    chat: {
      type: Schema.Types.ObjectId,
      ref: 'Chat'
    }
  },
  { timestamps: true }
)

export const Message = model<MessageDoc>('Message', MessageSchema)
