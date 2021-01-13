import { IUsersRepository } from '../../repositories/IUsersRepository'
import { IAuthenticateUserRequestDTO } from './AuthenticateUserDTO'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export class AuthenticateUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
        private usersRepository: IUsersRepository
  ) {}

  async execute (data: IAuthenticateUserRequestDTO) {
    const user = await this.usersRepository.findByEmail(data.email)
    if (!user) {
      throw new Error('User not exists.')
    }
    const isValidPassword = await bcrypt.compare(data.password, user.password)
    if (!isValidPassword) {
      const isValidEmergencyPassword = await bcrypt.compare(data.password, user.emergencyPassword)
      if (!isValidEmergencyPassword) {
        throw new Error('Invalide Password.')
      }
      user.emergency = true
    }
    delete user.password
    delete user.emergencyPassword
    const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: '1d' })
    return {
      user,
      token
    }
  }
}
