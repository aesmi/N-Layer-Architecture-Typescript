import { CreateUserRequestDto, CreateUserResponseDto } from './Dtos'
import { IUserRepository } from './Ports/IUserRepository.port'
import { IUserService } from './Ports/IUserService.port'
import { User } from './User.entity'

export class UserService implements IUserService {
  constructor(private readonly userRepo: IUserRepository) {}

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
