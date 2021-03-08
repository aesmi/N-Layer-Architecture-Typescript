import { IUserRepository } from '../../../../Core/User/Ports/IUserRepository.port'
import { User } from '../../../../Core/User/User.entity'
import { UserDAL } from './User.entity'
import { LocalDatabase } from '../LocalDatabase'
import { inject, injectable } from 'inversify'
import { IUserMapper } from '../../../../Config/Mappers/User/IUserMapper'
import { Types } from '../../../../Config/DI/Types'

@injectable()
export class UserRepository implements IUserRepository {
  private readonly database = new LocalDatabase()

  constructor(
    @inject(Types.UserMapper) private readonly userMapper: IUserMapper
  ) {}

  async save(payload: User) {
    const createdUser = this.database.create<UserDAL>('users', payload)

    return this.userMapper.toDomain(createdUser)
  }
}
