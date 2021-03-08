import { CoreValidationException } from '../Exceptions/CoreValidation.exception'
import { generateUUID } from '../Lib/GenerateUUID'
import { IUserEntity } from './IUserEntity'

export class User implements IUserEntity {
  public id: string
  public name: string
  public createdAt: Date

  constructor(props: Partial<User>) {
    this.validate(props)
    this.initialize(props)
  }

  private initialize({ id, name, createdAt }: Partial<User>) {
    this.id = id != null ? id : generateUUID()
    this.name = name!
    this.createdAt = createdAt != null ? createdAt : new Date()
  }

  private validate({ name }: Partial<User>) {
    if (name && name.length <= 4) {
      throw new CoreValidationException(
        'Username must have atleast 4 characters'
      )
    }
  }
}
