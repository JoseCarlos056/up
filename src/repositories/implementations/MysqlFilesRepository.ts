import { getRepository } from 'typeorm'
import { File } from '../../models/File'
import { IFilesRepository } from '../IFilesRepository'
export class MysqlFilesRepository implements IFilesRepository {
  async save (file: File): Promise<void> {
    const userRepo = getRepository(File)
    const newUser = await userRepo.create(file)
    await userRepo.save(newUser).catch((err) => {
      console.log('Error: ', err)
      throw new Error('Failure to create User. Erro: ' + err)
    })
    console.log('New User Saved', newUser)
  };
}
