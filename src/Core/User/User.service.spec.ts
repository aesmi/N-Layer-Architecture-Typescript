import 'reflect-metadata'

import { Container, injectable } from 'inversify'
import { User as UserModule } from '../../Config/DI/Modules/User.module'
import { Types } from '../../Config/DI/Types'
import { IUserRepository } from './Ports/IUserRepository.port'
import { IUserService } from './Ports/IUserService.port'
import { User } from './User.entity'

@injectable()
class RepoMock implements IUserRepository {
  save(payload: User): User {
    return payload
  }
}

describe('UserService', () => {
  let container: Container
  let userService: IUserService

  beforeEach(() => {
    container = new Container()
    container.load(UserModule)

    container.unbind(Types.UserRepository)
    container.bind(Types.UserRepository).to(RepoMock)

    userService = container.get<IUserService>(Types.UserService)
  })

  it('Should give me a created user back', () => {
    const createdUser = userService.createUser({ name: 'Donny' })

    expect(createdUser).toBeDefined()
    expect(createdUser.name).toEqual('Donny')
  })

  it('Should throw an exception when the provided name is shorter than 4 characters', () => {
    expect(() => {
      userService.createUser({ name: 'abc' })
    }).toThrow()
  })
})
