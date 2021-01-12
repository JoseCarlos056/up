import { getRepository } from 'typeorm'
import { User } from '../../models/User'
import { IUsersRepository } from '../IUsersRepository'
export class MysqlUsersRepository implements IUsersRepository {
  async findByEmail (email: string): Promise<User> {
    const userRepo = getRepository(User)
    const userExists = userRepo.findOne({ where: { email } })
    return userExists
  }

  async save (user: User): Promise<void> {
    const userRepo = getRepository(User)
    const userExists = userRepo.findOne({ where: { email: user.email } })
    console.log(userRepo, 'aa')
    const newUser = userRepo.create(user)
    console.log(newUser)
    await userRepo.save(newUser).catch((err) => {
      console.log('Error: ', err)
    })
    console.log('New User Saved', newUser)
  };
}
