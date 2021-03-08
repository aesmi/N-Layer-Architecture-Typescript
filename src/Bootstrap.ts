import { userService } from './Core'
import { UserController } from './Web/App'

const userController = new UserController(userService)
const response = userController.store({ name: 'Donny' })
console.log(response)
