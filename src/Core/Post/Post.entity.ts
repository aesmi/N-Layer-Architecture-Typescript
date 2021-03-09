import { Entity } from 'Core/Lib/Entity'
import { CoreValidationException } from 'Core/Lib/Exceptions/CoreValidation.exception'
import { IPostEntity } from 'Core/Post/IPostEntity'

export class Post extends Entity<IPostEntity> implements IPostEntity {
  id: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date

  userId: string

  protected validate({ title, content, userId }: Partial<IPostEntity>) {
    if (!userId) {
      throw new CoreValidationException('You are not authorized')
    }

    if (!title || !content) {
      throw new CoreValidationException('Post must contain a title and content')
    }

    if (title!.length < 6) {
      throw new CoreValidationException(
        'Post title must consist of atleast 6 characters'
      )
    }

    if (content!.length < 12) {
      throw new CoreValidationException(
        'Post content must consist of atleast 12 characters'
      )
    }
  }

  protected initialize({
    id,
    title,
    content,
    createdAt,
    updatedAt,
    userId,
  }: IPostEntity) {
    this.id = id != null ? id : this.genUUID()
    this.title = title
    this.content = content
    this.createdAt = this.initOrDefaultTime(createdAt)
    this.updatedAt = this.initOrDefaultTime(updatedAt)

    this.userId = userId
  }
}
