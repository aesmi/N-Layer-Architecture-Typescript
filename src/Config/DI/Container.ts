import 'reflect-metadata'

import { Container } from 'inversify'

import { UserModule } from './Modules/User.module'

const container = new Container()

container.load(UserModule)

export { container }
