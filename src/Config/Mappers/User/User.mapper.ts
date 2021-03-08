import { injectable } from 'inversify'
import { IUserEntity } from 'Core/User/IUserEntity'
import { IUserModel } from 'Data/Drivers/Mongoose/User/User.model'
import { IUserMapper } from 'Config/Mappers/User/IUserMapper'

@injectable()
export class UserMapper implements IUserMapper {
  public toDomain(payload: IUserModel): IUserEntity {
    return {
      id: payload._id,
      name: payload.name,
      createdAt: payload.createdAt,
    }
  }

  public toPersistence(payload: IUserEntity): IUserModel {
    return {
      _id: payload.id,
      name: payload.name,
      createdAt: payload.createdAt,
    }
  }

  public toCreateUserRequestDto(payload: IUserEntity['name']) {
    return {
      name: payload,
    }
  }

  public toCreateUserResponseDto(payload: IUserEntity) {
    return {
      id: payload.id,
      name: payload.name,
      createdAt: payload.createdAt,
    }
  }
}
