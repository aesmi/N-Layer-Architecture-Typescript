import 'reflect-metadata'

import { Container, injectable } from 'inversify'

import { CoreValidationException } from 'Core/Lib/Exceptions/CoreValidation.exception'
import { UserModule } from 'Config/DI/Modules/User.module'
import { IUserRepository } from 'Core/User/Ports/IUserRepository.port'
import { IUserService } from 'Core/User/Ports/IUserService.port'
import { IUserEntity } from 'Core/User/IUserEntity'
import { Types } from 'Config/DI/Types'

@injectable()
class RepoMock implements IUserRepository {
  async save(payload: IUserEntity) {
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

  it('Should give me a created user back', async (done) => {
    const createdUser = await userService.createUser({ name: 'Donny' })

    expect(createdUser).toBeDefined()
    expect(createdUser.name).toEqual('Donny')
    done()
  })

  it('Should throw an exception when the provided name is shorter than 4 characters', async (done) => {
    expect(async () => {
      await userService.createUser({ name: 'abc' })
    }).rejects.toBeInstanceOf(CoreValidationException)

    done()
  })
})
