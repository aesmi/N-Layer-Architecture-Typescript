export class User {
  public id: string
  public name: string
  public createdAt: Date

  constructor({ id, name, createdAt }: Partial<User>) {

    // Then assign
    this.id = id != null ? id : 'asdfghjklmn'
    this.name = name!
    this.createdAt = createdAt != null ? createdAt : new Date()
  }
}
