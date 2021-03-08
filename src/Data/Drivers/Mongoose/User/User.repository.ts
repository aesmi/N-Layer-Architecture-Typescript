import { IUserRepository } from 'Core/User/Ports/IUserRepository.port'
import UserModel from './User.model'
import { inject, injectable } from 'inversify'
import { IUserMapper } from 'Config/Mappers/User/IUserMapper'
import { Types } from 'Config/DI/Types'
import { IUserEntity } from 'Core/User/IUserEntity'

@injectable()
export class UserRepository implements IUserRepository {
  private readonly model = UserModel

  constructor(
    @inject(Types.UserMapper) private readonly userMapper: IUserMapper
  ) {}

  async save(payload: IUserEntity) {
    const persistance = this.userMapper.toPersistence(payload)
    const createdUser = await this.model.create(persistance)

    return this.userMapper.toDomain(createdUser)
  }
}
