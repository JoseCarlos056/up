import { User } from "../../modules/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase{
    
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider
    ){

    }
    async execute(data: ICreateUserRequestDTO){
        // const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
        // if(userAlreadyExists){
        //     throw new Error('User already exists.');
        // }
        console.log(data)
        const user = new User(data);
        console.log(user,'xx')
        await this.usersRepository.save(user);
        this.mailProvider.sendMail({
            to:{
                name: data.name,
                email: data.email
            },
            from:{
                email:'equipe@gmail.com',
                name: 'Equipe'
            },
            subject:'Seja Bem vindo.',
            body:'<h1>Você já pode entrar em nossa plataforma</h1>'
        })
    }
}