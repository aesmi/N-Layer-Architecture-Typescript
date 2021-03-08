import express from 'express'
import { container } from '../Config/DI/Container'
import { Types } from '../Config/DI/Types'
import { UserController } from './User.controller'

class App {
  static PORT = 5000
  private server: express.Application = express()

  constructor() {
    this.run()
  }

  private async run() {
    const userController = container.get<UserController>(
      Types.UserHttpController
    )

    this.server.get('/', userController.store)

    this.server.listen(App.PORT, this.onSuccessListen)
  }

  private onSuccessListen() {
    console.log(`Server is running on: http:localhost:${App.PORT}`)
  }
}

export const app = new App()
