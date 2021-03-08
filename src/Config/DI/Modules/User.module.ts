import { ContainerModule } from 'inversify'
import { IUserRepository } from '../../../Core/User/Ports/IUserRepository.port'
import { IUserService } from '../../../Core/User/Ports/IUserService.port'
import { UserService } from '../../../Core/User/User.service'
import { UserRepository } from '../../../Data/User/User.repository'
import { UserController } from '../../../Web/User/User.controller'
import { IUserMapper } from '../../Mappers/User/IUserMapper'
import { UserMapper } from '../../Mappers/User/User.mapper'
import { Types } from '../Types'

export const User = new ContainerModule((bind) => {
  bind<IUserRepository>(Types.UserRepository)
    .to(UserRepository)
    .inSingletonScope()
  bind<IUserService>(Types.UserService).to(UserService).inSingletonScope()
  // TODO: Bind toself?
  bind<UserController>(Types.UserHttpController)
    .to(UserController)
    .inSingletonScope()
  bind<IUserMapper>(Types.UserMapper).to(UserMapper).inSingletonScope()
})
