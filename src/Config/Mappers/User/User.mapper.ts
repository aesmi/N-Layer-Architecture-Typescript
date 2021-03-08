import { injectable } from 'inversify'
import { User } from '../../../Core/User/User.entity'
import { User as DALUser } from '../../../Data/User/User.entity'
import { IUserMapper } from './IUserMapper'

@injectable()
export class UserMapper implements IUserMapper {
  public toDomain(payload: DALUser): User {
    return {
      id: payload.id,
      name: payload.name,
      createdAt: payload.createdAt,
    }
  }

  // TODO: What if this is a mongoose instance
  // TODO: What if we have different drivers
  public toPersistence(payload: DALUser): DALUser {
    return {
      id: payload.id,
      name: payload.name,
      createdAt: payload.createdAt,
    }
  }

  // TODO: Should we abstract this?
  public toCreateUserRequestDto(payload: User['name']) {
    return {
      name: payload,
    }
  }

  public toCreateUserResponseDto(payload: User) {
    return {
      id: payload.id,
      name: payload.name,
      createdAt: payload.createdAt,
    }
  }
}
