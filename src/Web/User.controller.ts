import { Request, Response } from 'express'
import { inject, injectable } from 'inversify'
import { Types } from '../Config/DI/Types'
import { IUserService } from '../Core/User/Ports/IUserService.port'

@injectable()
export class UserController {
  constructor(
    @inject(Types.UserService)
    private readonly userService: IUserService
  ) {
    this.store = this.store.bind(this)
  }

  store(req: Request, res: Response) {
    const createdUser = this.userService.createUser({ name: 'donny' })

    // As json
    res.json(createdUser)
  }
}
