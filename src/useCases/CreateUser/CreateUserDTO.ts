export interface ICreateUserRequestDTO{
    name: string;
    email: string;
    password: string;
    passwordHash: string;
}