import { IFilesRepository } from '../../repositories/IFilesRepository'
import { IUploadFileDTO } from './UploadFileDTO'
import crypto from 'crypto'
import fs from 'fs'
import { File } from '../../models/File'
import { User } from '../../models/User'

class UploadFileUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
        private filesRepository: IFilesRepository
  ) {

  }

  async execute (data: IUploadFileDTO) {
    const key = crypto.createHash('aes-256-cbc').update(data.file.filename + data.userId).digest('hex')
    const iv = crypto.createHash('aes-256-cbc').update(data.file.filename).digest('hex')
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
    const user = new User({ id: data.userId })
    const file = new File({ directory: fileName + '.enc', name: data.file.originalname, userId: user })
    this.filesRepository.save(file)
  }
}

export { UploadFileUseCase }
