import { CoreValidationException } from 'Core/Lib/Exceptions/CoreValidation.exception'
import { IUserEntity } from 'Core/User/IUserEntity'
import { Entity } from 'Core/Lib/Entity'

export class User extends Entity<IUserEntity> implements IUserEntity {
  public id: string
  public name: string
  public createdAt: Date

  protected initialize({ id, name, createdAt }: IUserEntity) {
    this.id = id != null ? id : this.genUUID()
    this.name = name!
    this.createdAt = this.initOrDefaultTime(createdAt)
  }

  protected validate({ name }: IUserEntity) {
    if (name && name.length < 4) {
      throw new CoreValidationException(
        'Username must have atleast 4 characters'
      )
    }
  }
}
