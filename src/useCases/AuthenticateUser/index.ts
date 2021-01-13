import { MysqlUsersRepository } from '../../repositories/implementations/MysqlUsersRepository'
import { AuthenticateUserController } from './AuthenticateUserController'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'

const mysqlUsersRepository = new MysqlUsersRepository()

const authenticateUserUseCase = new AuthenticateUserUseCase(
  mysqlUsersRepository
)
const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
)

export { authenticateUserUseCase, authenticateUserController }
