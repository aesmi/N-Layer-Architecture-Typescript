export class User {
  public id: string
  public name: string
  public createdAt: Date

  constructor({ id, name, createdAt }: Partial<User>) {
    this.id = id!
    this.name = name!
    this.createdAt = createdAt!
  }
}
