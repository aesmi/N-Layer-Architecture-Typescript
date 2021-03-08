import 'reflect-metadata'

import { Container } from 'inversify'

import { User } from './Modules/User.module'
import { Data } from './Modules/Data.module'

const container = new Container()

container.load(Data, User)

export { container }
