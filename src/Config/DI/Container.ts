import 'reflect-metadata'

import { Container } from 'inversify'

import { UserModule } from 'Config/DI/Modules/User.module'
import { PostModule } from 'Config/DI/Modules/Post.module'

const container = new Container()

container.load(UserModule, PostModule)

export { container }
