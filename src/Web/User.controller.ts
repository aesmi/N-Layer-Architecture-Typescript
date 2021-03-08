import { CreateUserRequestDto } from '../Core/Dtos'
import { IUserService } from '../Core/Ports/IUserService.port'

export class UserController {
  constructor(private readonly userService: IUserService) {}

  store(payload: CreateUserRequestDto) {
    const createdUser = this.userService.createUser(payload)

    // As json
    return createdUser
  }
}
