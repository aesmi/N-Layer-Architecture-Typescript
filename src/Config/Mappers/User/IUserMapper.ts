import { User } from '../../../Core/User/User.entity'
import { User as DALUser } from '../../../Data/User/User.entity'

import {
  CreateUserRequestDto,
  CreateUserResponseDto,
} from '../../../Core/User/Dtos'

export interface IUserMapper {
  toDomain(payload: DALUser): User
  toPersistence(payload: DALUser): DALUser
  toCreateUserRequestDto(payload: User['name']): CreateUserRequestDto
  toCreateUserResponseDto(payload: User): CreateUserResponseDto
}
