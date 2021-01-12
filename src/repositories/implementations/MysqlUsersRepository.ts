import { User } from "../../modules/User";
import {getRepository} from "typeorm";
import { IUsersRepository } from "../IUsersRepository";
export class MysqlUsersRepository implements IUsersRepository {
  private user: User;
  async findByEmail(email: string): Promise<User> {
      const user = this.user;
      return user;
  }

  async save(user: User): Promise<void> {
    const userRepo = getRepository(User);
    console.log(userRepo,'aa')
    const newUser = userRepo.create(user)
    console.log(newUser)
    await userRepo.save(newUser).catch((err) => {
      console.log("Error: ", err);
    });
    console.log("New User Saved", newUser);
  };
  
}
