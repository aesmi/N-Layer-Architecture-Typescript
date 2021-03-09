import mongoose, { Schema, Document } from 'mongoose'

export interface IPostModel {
  _id: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date

  userId: string
}

const PostModel: Schema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.String,
    ref: 'User',
    required: true,
  },
})

export default mongoose.model<IPostModel & Document>('Post', PostModel)
