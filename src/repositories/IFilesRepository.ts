import { File } from '../models/File'
import { User } from '../models/User'

export interface IFilesRepository{
    save(file:File): Promise<void>;
    find(user: User): Promise<Array<File>>;
    delete(file: File): Promise<void>;
}
