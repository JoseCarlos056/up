import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider'
import { MysqlUsersRepository } from '../../repositories/implementations/MysqlUsersRepository'
import { CreateUserConstroller } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const mailtrapMailProvider = new MailtrapMailProvider()
const mysqlUsersRepository = new MysqlUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  mysqlUsersRepository,
  mailtrapMailProvider
)
const createUserController = new CreateUserConstroller(
  createUserUseCase
)

export { createUserUseCase, createUserController }
