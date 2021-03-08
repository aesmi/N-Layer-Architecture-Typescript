import { CoreValidationException } from '../Exceptions/CoreValidation.exception'

export class User {
  public id: string
  public name: string
  public createdAt: Date

  constructor({ id, name, createdAt }: Partial<User>) {
    if (name && name.length <= 4) {
      throw new CoreValidationException(
        'Username must have atleast 4 characters'
      )
    }

    // TODO: Add a unique id generator
    this.id = id != null ? id : 'asdfghjklmn'
    this.name = name!
    this.createdAt = createdAt != null ? createdAt : new Date()
  }
}
