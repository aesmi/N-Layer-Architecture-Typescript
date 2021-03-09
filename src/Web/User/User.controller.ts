import { Request, Response } from 'express'
import { inject } from 'inversify'

import { Types } from 'Config/DI/Types'
import { IUserMapper } from 'Config/Mappers/User/IUserMapper'
import { IUserService } from 'Core/User/Ports/IUserService.port'
import {
  controller,
  httpPost,
  request,
  response,
} from 'inversify-express-utils'

@controller('/users')
export class UserController {
  constructor(
    @inject(Types.UserService)
    private readonly userService: IUserService,
    @inject(Types.UserMapper)
    private readonly userMapper: IUserMapper
  ) {
    this.store = this.store.bind(this)
  }

  @httpPost('/')
  async store(@request() req: Request, @response() res: Response) {
    const payload = this.userMapper.toCreateUserRequestDto(req.body.name)
    const createdUser = await this.userService.createUser(payload)

    res.json(createdUser)
  }
}
