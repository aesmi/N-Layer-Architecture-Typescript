import { Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import { Types } from '../../Config/DI/Types'
import { IUserMapper } from '../../Config/Mappers/User/IUserMapper'
import { UserMapper } from '../../Config/Mappers/User/User.mapper'
import { IUserService } from '../../Core/User/Ports/IUserService.port'

@injectable()
export class UserController {
  constructor(
    @inject(Types.UserService)
    private readonly userService: IUserService,
    @inject(Types.UserMapper)
    private readonly userMapper: IUserMapper
  ) {
    this.store = this.store.bind(this)
  }

  store(req: Request, res: Response) {
    // TODO: move this to a middleware which validates the presence
    // And returns us the mapped request dto!
    const payload = this.userMapper.toCreateUserRequestDto(req.body.name)
    const createdUser = this.userService.createUser(payload)

    res.json(createdUser)
  }
}
