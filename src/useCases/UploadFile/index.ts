import { MysqlFilesRepository } from '../../repositories/implementations/MysqlFilesRepository'
import { UploadFileController } from './UploadFileController'
import { UploadFileUseCase } from './UploadFileUseCase'
const mysqlFilesRepository = new MysqlFilesRepository()
const uploadFileUseCase = new UploadFileUseCase(mysqlFilesRepository)
const uploadFileController = new UploadFileController(uploadFileUseCase)

export { uploadFileController, uploadFileUseCase }
