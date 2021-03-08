import { CreateUserRequestDto, CreateUserResponseDto } from '../Dtos'

export interface IUserService {
  createUser(payload: CreateUserRequestDto): Promise<CreateUserResponseDto>
}
