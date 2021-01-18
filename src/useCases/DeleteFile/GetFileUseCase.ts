import { IFilesRepository } from '../../repositories/IFilesRepository'
import { IGetFileDTO } from './GetFileDTO'
import { User } from '../../models/User'

class GetFileUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
        private filesRepository: IFilesRepository
  ) {

  }

  async execute (data: IGetFileDTO) {
    const user = new User({ id: data.userId })
    const files = await this.filesRepository.find(user)
    return files
  }
}

export { GetFileUseCase }
