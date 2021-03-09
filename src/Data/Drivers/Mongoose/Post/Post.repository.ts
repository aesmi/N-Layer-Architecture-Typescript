import { Types } from 'Config/DI/Types'
import { IPostMapper } from 'Config/Mappers/Post/IPostMapper'
import { IPostEntity } from 'Core/Post/IPostEntity'
import { IPostRepository } from 'Core/Post/Ports/IPostRepository.port'
import { inject, injectable } from 'inversify'
import PostModel from './Post.model'

@injectable()
export class PostRepository implements IPostRepository {
  private readonly model = PostModel

  constructor(
    @inject(Types.PostMapper) private readonly postMapper: IPostMapper
  ) {}

  async save(payload: IPostEntity) {
    const persistance = this.postMapper.toPersistence(payload)
    const createdPost = await this.model.create(persistance)

    return this.postMapper.toDomain(createdPost)
  }
}
