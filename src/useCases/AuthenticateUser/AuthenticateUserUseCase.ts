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
    const userExists = await this.usersRepository.findByEmail(data.email)
    if (!userExists) {
      throw new Error('User not exists.')
    }
    const isValidPassword = await bcrypt.compare(data.password, userExists.password)
    if (!isValidPassword) {
      const isValidEmergencyPassword = await bcrypt.compare(data.password, userExists.emergencyPassword)
      if (!isValidEmergencyPassword) {
        throw new Error('Invalide Password.')
      }
      userExists.emergency = true
    }
    delete userExists.password
    delete userExists.emergencyPassword
    const token = jwt.sign({ id: userExists.id }, 'secret', { expiresIn: '1d' })
    return {
      userExists,
      token
    }
  }
}
