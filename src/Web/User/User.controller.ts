import { Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import { Types } from '../../Config/DI/Types'
import { IUserMapper } from '../../Config/Mappers/User/IUserMapper'
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

  async store(req: Request, res: Response) {
    const payload = this.userMapper.toCreateUserRequestDto(req.body.name)
    const createdUser = await this.userService.createUser(payload)

    res.json(createdUser)
  }
}
