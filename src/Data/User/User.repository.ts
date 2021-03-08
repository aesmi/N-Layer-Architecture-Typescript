import { IUserRepository } from '../../Core/User/Ports/IUserRepository.port'
import { User } from '../../Core/User/User.entity'
import { User as UserDAL } from './User.entity'
import { Database, database } from '../Database'
import { inject, injectable } from 'inversify'
import { IUserMapper } from '../../Config/Mappers/User/IUserMapper'
import { Types } from '../../Config/DI/Types'

@injectable()
export class UserRepository implements IUserRepository {
  private readonly database: Database = database

  @inject(Types.UserMapper)
  private readonly userMapper: IUserMapper

  // TODO: Implements IDatabase
  // constructor(private readonly database: Database) {}

  save(payload: User): User {
    const createdUser = this.database.create<UserDAL>(payload)

    return this.userMapper.toDomain(createdUser)
  }
}

export const userRepository = new UserRepository()
