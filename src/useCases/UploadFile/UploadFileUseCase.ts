import { IFilesRepository } from '../../repositories/IFilesRepository'
import { IUploadFileDTO } from './UploadFileDTO'

class UploadFileUseCase {
  constructor (
        private filesRepository: IFilesRepository
  ) {

  }

  async execute (data: IUploadFileDTO) {

  }
}
