import express from 'express'
import { container } from 'Config/DI/Container'
import { Types } from 'Config/DI/Types'
import { connectToMongo } from 'Data/Drivers/Mongoose/Connection'
import { UserController } from 'Web/User/User.controller'
import { UserValidator } from 'Web/User/User.validator'
import { PostController } from './Post/Post.controller'
import { PostValidator } from './Post/Post.validator'

class App {
  static PORT = 5000
  public server: express.Application = express()

  constructor() {
    this.run()
  }

  private async run() {
    const userController = container.get<UserController>(
      Types.UserHttpController
    )

    const postController = container.get<PostController>(
      Types.PostHttpController
    )

    if (process.env.NODE_ENV !== 'test') {
      connectToMongo()
    }

    this.server.use(express.json())

    this.server.post(
      '/post',
      PostValidator.CreatePostRequest,
      postController.store
    )
    this.server.post('/', UserValidator.CreateUserRequest, userController.store)

    if (process.env.NODE_ENV !== 'test') {
      this.server.listen(App.PORT, this.onSuccessListen)
    }
  }

  private onSuccessListen() {
    console.log(`Server is running on: http:localhost:${App.PORT}`)
  }
}

export const app = new App()
