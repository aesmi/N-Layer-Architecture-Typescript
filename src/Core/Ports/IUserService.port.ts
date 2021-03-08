import { CreateUserRequestDto, CreateUserResponseDto } from '../Dtos'
import { User } from '../User.entity'

export interface IUserService {
  createUser(payload: CreateUserRequestDto): CreateUserResponseDto
}
