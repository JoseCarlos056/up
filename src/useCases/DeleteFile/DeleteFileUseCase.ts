import { IFilesRepository } from '../../repositories/IFilesRepository'
import { IDeleteFileDTO } from './DeleteFileDTO'
import { File } from '../../models/File'

class DeleteFileUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
        private filesRepository: IFilesRepository
  ) {

  }

  async execute (data: IDeleteFileDTO) {
    const file = new File(data.file)
    await this.filesRepository.delete(file)
  }
}

export { DeleteFileUseCase }
