import { IUserEntity } from 'Core/User/IUserEntity'

export interface IUserRepository {
  save(payload: IUserEntity): Promise<IUserEntity>
}
