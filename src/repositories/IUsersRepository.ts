import { User } from "../modules/User";

export interface IUsersRepository{
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;
}