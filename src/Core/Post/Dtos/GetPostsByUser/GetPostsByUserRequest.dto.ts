import { IUserEntity } from 'Core/User/IUserEntity'

export class GetPostsByUserRequestDto {
  userId: IUserEntity['id']
}
