import { getRepository } from 'typeorm'
import { File } from '../../models/File'
import { User } from '../../models/User'
import { IFilesRepository } from '../IFilesRepository'
export class MysqlFilesRepository implements IFilesRepository {
  async save (file: File): Promise<File> {
    const fileRepo = getRepository(File)
    const newFile = await fileRepo.create(file)
    console.log(newFile)
    await fileRepo.save(newFile).catch((err) => {
      console.log('Error: ', err)
      throw new Error('Failure to create User. Erro: ' + err)
    })
    console.log('New File Saved', newFile)
    return newFile
  };

  async find (user: User): Promise<Array<File>> {
    const fileRepo = getRepository(File)
    const files = await fileRepo.find({ where: { user: user } })
    return files
  }

  async delete (id: string): Promise<void> {
    const fileRepo = getRepository(File)
    await fileRepo.delete(id)
  }

  async findById (id: string): Promise<File> {
    const fileRepo = getRepository(File)
    const file = await fileRepo.findOne({ where: { id } })
    return file
  }
}
