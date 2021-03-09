import { IPostEntity } from '../IPostEntity'

export interface IPostRepository {
  save(payload: IPostEntity): Promise<IPostEntity>
}
