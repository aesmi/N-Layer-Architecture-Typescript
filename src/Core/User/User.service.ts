import { inject, injectable } from 'inversify'
import { Types } from '../../Config/DI/Types'
import { CreateUserRequestDto, CreateUserResponseDto } from './Dtos'
import { IUserRepository } from './Ports/IUserRepository.port'
import { IUserService } from './Ports/IUserService.port'
import { User } from './User.entity'

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(Types.UserRepository) private readonly userRepo: IUserRepository
  ) {}

  createUser(payload: CreateUserRequestDto): CreateUserResponseDto {
    const userEntity = new User(payload)
    const createdUser = this.userRepo.save(userEntity)

    return {
      id: createdUser.id,
      name: createdUser.name,
      createdAt: createdUser.createdAt,
    }
  }
}
