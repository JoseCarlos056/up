import { User } from '../../models/User'
import { IMailProvider } from '../../providers/IMailProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
  ) {
  }

  async execute (data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)
    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }
    const user = new User(data)
    console.log(user, 'xx')
    await this.usersRepository.save(user)
    this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        email: 'equipe@gmail.com',
        name: 'Equipe'
      },
      subject: 'Seja Bem vindo.',
      body: '<h1>Você já pode entrar em nossa plataforma</h1>'
    })
  }
}
