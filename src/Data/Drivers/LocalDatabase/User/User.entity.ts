import { IUserEntity } from 'Core/User/IUserEntity'

export class UserDAL implements IUserEntity {
  public id: string
  public name: string
  public createdAt: Date

  constructor({ id, name, createdAt }: Partial<UserDAL>) {
    this.id = id!
    this.name = name!
    this.createdAt = createdAt!
  }
}
