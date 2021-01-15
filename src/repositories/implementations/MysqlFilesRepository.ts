import { getRepository } from 'typeorm'
import { File } from '../../models/File'
import { IFilesRepository } from '../IFilesRepository'
export class MysqlFilesRepository implements IFilesRepository {
  async save (file: File): Promise<void> {
    console.log(file)

    const fileRepo = getRepository(File)
    const newFile = await fileRepo.create(file)
    console.log(newFile)
    await fileRepo.save(newFile).catch((err) => {
      console.log('Error: ', err)
      throw new Error('Failure to create User. Erro: ' + err)
    })
    console.log('New File Saved', newFile)
  };
}
