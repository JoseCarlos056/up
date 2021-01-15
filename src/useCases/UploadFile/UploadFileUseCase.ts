import { IFilesRepository } from '../../repositories/IFilesRepository'
import { IUploadFileDTO } from './UploadFileDTO'
import crypto from 'crypto'
import fs from 'fs'
import { File } from '../../models/File'

class UploadFileUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
        private filesRepository: IFilesRepository
  ) {

  }

  async execute (data: IUploadFileDTO) {
    const key = crypto.createHash('aes-256-cbc').update(data.file.filename + data.userId).digest()
    const iv = crypto.createHash('aes-256-cbc').update(data.file.filename).digest()
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv)
    const fileName = data.file.destination + '\\' + data.file.filename
    const input = fs.createReadStream(fileName)
    const output = fs.createWriteStream(fileName + '.enc')
    input.pipe(cipher).pipe(output)
    output.on('finish', function () {
      fs.unlink(fileName, (err) => {
        if (err) throw err
      })
    })
    const file = new File()
    file.directory = fileName + '.enc'
    file.name = data.file.originalname
    file.userId = 'sss'
    this.filesRepository.save()
  }
}

export { UploadFileUseCase }
