import { request, Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserConstroller{
    constructor(
        private createUserUseCase: CreateUserUseCase
    ){

    }
    async handle(request: Request, response: Response): Promise<Response>{

        const{ name, email, password, passwordHash} = request.body;
        try {
            await this.createUserUseCase.execute({
                email,
                name,
                password,
                passwordHash,
            })
            return response.status(201).send();
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error'
            });
        }
        
    }
}