import { inject, injectable } from 'inversify'
import { Types } from 'Config/DI/Types'
import { User } from 'Core/User/User.entity'
import { IUserMapper } from 'Config/Mappers/User/IUserMapper'
import { IUserRepository } from 'Core/User/Ports/IUserRepository.port'
import { IUserService } from 'Core/User/Ports/IUserService.port'
import { CreateUserRequestDto } from 'Core/User/Dtos'

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(Types.UserRepository) private readonly userRepo: IUserRepository,
    @inject(Types.UserMapper) private readonly userMapper: IUserMapper
  ) {}

  async createUser(payload: CreateUserRequestDto) {
    const userEntity = new User(payload)
    const createdUser = await this.userRepo.save(userEntity)

    return this.userMapper.toCreateUserResponseDto(createdUser)
  }
}
