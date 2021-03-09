import { Request, Response } from 'express'
import { inject } from 'inversify'

import { Types } from 'Config/DI/Types'
import { IPostMapper } from 'Config/Mappers/Post/IPostMapper'
import { IPostService } from 'Core/Post/Ports/IPostService.port'
import {
  controller,
  httpGet,
  httpPost,
  request,
  response,
} from 'inversify-express-utils'

@controller('/posts')
export class PostController {
  constructor(
    @inject(Types.PostService)
    private readonly postService: IPostService,
    @inject(Types.PostMapper)
    private readonly postMapper: IPostMapper
  ) {
    this.getUserPosts = this.getUserPosts.bind(this)
    this.store = this.store.bind(this)
  }

  @httpGet('/')
  async getUserPosts(
    @request() req: Request & { query: { userId: string } },
    @response() res: Response
  ) {
    const payload = this.postMapper.toGetPostsByUserRequestDto(req.query)
    const userPosts = await this.postService.getPostsByUser(payload)
    res.json(userPosts)
  }

  @httpPost('/')
  async store(req: Request, res: Response) {
    const payload = this.postMapper.toCreatePostRequestDto(req.body)
    const createdPost = await this.postService.createPost(payload)

    res.json(createdPost)
  }
}
