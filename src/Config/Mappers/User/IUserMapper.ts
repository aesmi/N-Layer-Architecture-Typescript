import { User } from '../../../Core/User/User.entity'
import { UserDAL } from '../../../Data/Drivers/LocalDatabase/User/User.entity'

import {
  CreateUserRequestDto,
  CreateUserResponseDto,
} from '../../../Core/User/Dtos'
import { IUserEntity } from '../../../Core/User/IUserEntity'
import { IUserModel } from '../../../Data/Drivers/Mongoose/User/User.model'

export interface IUserMapper {
  toDomain(payload: IUserModel): IUserEntity
  toPersistence(payload: IUserEntity): IUserModel
  toCreateUserRequestDto(payload: IUserEntity['name']): CreateUserRequestDto
  toCreateUserResponseDto(payload: IUserEntity): CreateUserResponseDto
}
