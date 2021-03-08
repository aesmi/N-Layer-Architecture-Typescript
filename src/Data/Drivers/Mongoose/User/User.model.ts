import mongoose, { Schema, Document } from 'mongoose'
import { IUserEntity } from '../../../../Core/User/IUserEntity'

export interface IUserModel {
  _id: string
  name: string
  createdAt: Date
}

const UserModel: Schema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
})

export default mongoose.model<IUserModel & Document>('User', UserModel)
