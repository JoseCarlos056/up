import { File } from '../models/File'

export interface IFilesRepository{
    save(file:File): Promise<void>
}
