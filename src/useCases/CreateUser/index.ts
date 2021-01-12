import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MysqlUsersRepository } from "../../repositories/implementations/MysqlUsersRepository";
import { CreateUserConstroller } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository = new MysqlUsersRepository

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider
)
const createUserController = new CreateUserConstroller(
    createUserUseCase
);

export { createUserUseCase, createUserController}