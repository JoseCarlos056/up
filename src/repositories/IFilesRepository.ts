import { File } from '../models/File'
import { User } from '../models/User'

export interface IFilesRepository{
    save(file:File): Promise<File>;
    find(user: User): Promise<Array<File>>;
    findById(id:string): Promise<File>;
    delete(file: string): Promise<void>;
}
