import { IUserRepository } from '../../Core/User/Ports/IUserRepository.port'
import { User } from '../../Core/User/User.entity'
import { User as UserDAL } from './User.entity'
import { Database, database } from '../Database'
import { injectable } from 'inversify'

@injectable()
export class UserRepository implements IUserRepository {
  private readonly database: Database = database
  // TODO: Implements IDatabase
  // constructor(private readonly database: Database) {}

  save(payload: User): User {
    const createdUser = this.database.create<UserDAL>(payload)

    // Use a mapper to make sure that the DALEntity equals the Core entity
    return {
      id: createdUser.id,
      name: createdUser.name,
      createdAt: createdUser.createdAt,
    } as User
  }
}

export const userRepository = new UserRepository()
