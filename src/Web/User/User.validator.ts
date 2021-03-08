import { NextFunction, Request } from 'express'
import { CreateUserRequestDto } from '../../Core/User/Dtos'
import { HttpException } from '../Lib/Http.exception'

export class UserValidator {
  static CreateUserRequest(
    req: Request & { body: CreateUserRequestDto },
    _: any,
    next: NextFunction
  ) {
    if (!req.body.name) {
      throw new HttpException('Name field is required.')
    }

    next()
  }
}
