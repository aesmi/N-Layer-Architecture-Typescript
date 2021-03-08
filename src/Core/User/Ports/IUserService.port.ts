import { CreateUserRequestDto, CreateUserResponseDto } from 'Core/User/Dtos'

export interface IUserService {
  createUser(payload: CreateUserRequestDto): Promise<CreateUserResponseDto>
}
