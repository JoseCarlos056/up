import { IFilesRepository } from '../../repositories/IFilesRepository'
import { IDeleteFileDTO } from './DeleteFileDTO'
import fs from 'fs'
import path from 'path'
class DeleteFileUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
        private filesRepository: IFilesRepository
  ) {

  }

  async execute (data: IDeleteFileDTO) {
    const file = await this.filesRepository.findById(data.id)
    await this.filesRepository.delete(data.id)
    fs.unlinkSync(path.resolve(__dirname, '..', '..', '..', 'uploads') + file.fileName)
  }
}

export { DeleteFileUseCase }
