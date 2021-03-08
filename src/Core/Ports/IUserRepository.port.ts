import { User } from '../User.entity'

export interface IUserRepository {
  save(payload: User): User
}
