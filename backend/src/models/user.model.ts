import { Schema, model } from 'mongoose'

import { DefaultPicture } from '../../config'

export interface UserDoc extends Document {
  name: string
  email: string
  password: string
  pic: string
}

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    pic: { type: String, default: DefaultPicture, required: true }
  },
  { timestamps: true }
)

export const User = model<UserDoc>('User', UserSchema)
