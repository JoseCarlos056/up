import { IFilesRepository } from '../../repositories/IFilesRepository'
import { IUploadFileDTO } from './UploadFileDTO'
import crypto from 'crypto'
import fs from 'fs'
import { File } from '../../models/File'
import { User } from '../../models/User'
import 'dotenv'
class UploadFileUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
        private filesRepository: IFilesRepository
  ) {

  }

  async execute (data: IUploadFileDTO) {
    const key = crypto.createHash('sha256').update(data.userId + data.file.filename).digest('hex').substr(0, 32)
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), Buffer.from(data.file.filename.split('-').shift(), 'hex'))
    const fileName = data.file.destination + '\\' + data.file.filename
    const input = fs.createReadStream(fileName)
    const output = fs.createWriteStream(`${fileName}.enc`)
    input.pipe(cipher).pipe(output)
    output.on('finish', function () {
      fs.unlink(fileName, (err) => {
        if (err) throw err
      })
    })
    const user = new User({ id: data.userId })
    const file = new File({ url: process.env.URL_SERVER + data.file.filename + '.enc', originalName: data.file.originalname, fileName: data.file.filename, user: user })
    const filesaved = await this.filesRepository.save(file)
    return filesaved
  }
}

export { UploadFileUseCase }
