import { NextFunction, Request } from 'express'
import { HttpException } from 'Web/Lib/Http.exception'
import { CreatePostRequestDto } from 'Core/Post/Dtos/CreatePostRequest.dto'

export class PostValidator {
  static CreatePostRequest(req: Request, _: any, next: NextFunction) {
    if (!req.body.title) {
      throw new HttpException('title field is required.')
    }

    if (!req.body.content) {
      throw new HttpException('content field is required.')
    }
    next()
  }
}
