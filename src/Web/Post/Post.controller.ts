import { Request, Response } from 'express'
import { inject, injectable } from 'inversify'

import { Types } from 'Config/DI/Types'
import { IPostMapper } from 'Config/Mappers/Post/IPostMapper'
import { IPostService } from 'Core/Post/Ports/IPostService.port'

@injectable()
export class PostController {
  constructor(
    @inject(Types.PostService)
    private readonly postService: IPostService,
    @inject(Types.PostMapper)
    private readonly postMapper: IPostMapper
  ) {
    this.store = this.store.bind(this)
  }

  async store(req: Request, res: Response) {
    const payload = this.postMapper.toCreatePostRequestDto(req.body)
    const createdPost = await this.postService.createPost(payload)

    res.json(createdPost)
  }
}
