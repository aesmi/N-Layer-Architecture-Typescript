import { IUserEntity } from '../IUserEntity'

export interface IUserRepository {
  save(payload: IUserEntity): Promise<IUserEntity>
}
