import { ContainerModule } from 'inversify'
import { IUserRepository } from 'Core/User/Ports/IUserRepository.port'
import { IUserService } from 'Core/User/Ports/IUserService.port'
import { UserService } from 'Core/User/User.service'
import { UserRepository as MongoUserRepository } from 'Data/Drivers/Mongoose/User/User.repository'
import { IUserMapper } from 'Config/Mappers/User/IUserMapper'
import { UserMapper } from 'Config/Mappers/User/User.mapper'
import { Types } from 'Config/DI/Types'

export const UserModule = new ContainerModule((bind) => {
  bind<IUserRepository>(Types.UserRepository)
    .to(MongoUserRepository)
    .inSingletonScope()
  bind<IUserService>(Types.UserService).to(UserService).inSingletonScope()
  bind<IUserMapper>(Types.UserMapper).to(UserMapper).inSingletonScope()
})
