import { IPostService } from 'Core/Post/Ports/IPostService.port'
import { CreatePostRequestDto } from './Dtos/CreatePostRequest.dto'
import { Post } from 'Core/Post/Post.entity'
import { inject, injectable } from 'inversify'
import { IPostRepository } from './Ports/IPostRepository.port'
import { Types } from 'Config/DI/Types'
import { CreatePostResponseDto } from './Dtos/CreatePostResponse.dto'
import { IPostMapper } from 'Config/Mappers/Post/IPostMapper'

@injectable()
export class PostService implements IPostService {
  constructor(
    @inject(Types.PostMapper) private readonly postMapper: IPostMapper,
    @inject(Types.PostRepository) private readonly postRepo: IPostRepository
  ) {}

  async createPost(
    payload: CreatePostRequestDto
  ): Promise<CreatePostResponseDto> {
    const post = new Post(payload)
    const createdPost = await this.postRepo.save(post)

    return this.postMapper.toCreatePostResponseDto(createdPost)
  }
}
