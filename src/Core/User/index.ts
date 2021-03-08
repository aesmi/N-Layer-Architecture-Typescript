import { userRepository } from '../../Data/User/User.repository'
import { UserService } from './User.service'

export const userService = new UserService(userRepository)
