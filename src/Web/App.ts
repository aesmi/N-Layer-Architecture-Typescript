import express from 'express'

import { InversifyExpressServer } from 'inversify-express-utils'
import { connectToMongo } from 'Data/Drivers/Mongoose/Connection'
import { container } from 'Config/DI/Container'

import 'Web/User/User.controller'
import 'Web/Post/Post.controller'

class App {
  static PORT = 5000
  public server = new InversifyExpressServer(container)
  public app: express.Application

  constructor() {
    this.run()
  }

  private async run() {
    if (process.env.NODE_ENV !== 'test') {
      connectToMongo()
    }

    this.server.setConfig((app) => {
      app.use(express.json())
    })

    this.app = this.server.build()

    if (process.env.NODE_ENV !== 'test') {
      this.app.listen(App.PORT, this.onSuccessListen)
    }
  }

  private onSuccessListen() {
    console.log(`Server is running on: http:localhost:${App.PORT}`)
  }
}

export const app = new App()
