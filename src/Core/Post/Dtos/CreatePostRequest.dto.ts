import { IUserEntity } from 'Core/User/IUserEntity'

export class CreatePostRequestDto {
  title: string
  content: string
  userId: IUserEntity['id']
}
