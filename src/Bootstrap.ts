import { userService } from './Core/User'
import { UserController } from './Web/App'

const userController = new UserController(userService)
const response = userController.store({ name: 'Donny' })
console.log(response)
