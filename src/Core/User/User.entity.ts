import { CoreValidationException } from '../Exceptions/CoreValidation.exception'

export class User {
  public id: string
  public name: string
  public createdAt: Date

  constructor({ id, name, createdAt }: Partial<User>) {
    this.validate(name!)

    // TODO: Add a unique id generator
    this.id = id != null ? id : 'asdfghjklmn'
    this.name = name!
    this.createdAt = createdAt != null ? createdAt : new Date()
  }

  private validate(name: User['name']) {
    if (name.length <= 4)
      throw new CoreValidationException(
        'Username must have atleast 4 characters'
      )
  }
}
