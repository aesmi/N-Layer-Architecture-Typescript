import { IUserRepository } from '../../Core/User/Ports/IUserRepository.port'
import { User } from '../../Core/User/User.entity'
import { User as UserDAL } from './User.entity'
import { database, Database } from '../Database'

export class UserRepository implements IUserRepository {
  // TODO: Implements IDatabase
  constructor(private readonly database: Database) {}

  save(payload: User): User {
    const createdUser = this.database.create<UserDAL>(payload)

    // Use a mapper to make sure that the DALEntity equals the Core entity
    return createdUser
  }
}

export const userRepository = new UserRepository(database)
