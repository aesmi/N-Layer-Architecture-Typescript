import { IUserRepository } from '../../Core/User/Ports/IUserRepository.port'
import { User } from '../../Core/User/User.entity'
import { User as UserDAL } from './User.entity'
import { LocalDatabase } from '../Drivers/LocalDatabase/LocalDatabase'
import { inject, injectable } from 'inversify'
import { IUserMapper } from '../../Config/Mappers/User/IUserMapper'
import { Types } from '../../Config/DI/Types'

@injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @inject(Types.Database) private readonly database: LocalDatabase,
    @inject(Types.UserMapper) private readonly userMapper: IUserMapper
  ) {}

  save(payload: User): User {
    const createdUser = this.database.create<UserDAL>(payload)

    return this.userMapper.toDomain(createdUser)
  }
}
