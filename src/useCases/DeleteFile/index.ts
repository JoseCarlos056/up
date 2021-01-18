import { MysqlFilesRepository } from '../../repositories/implementations/MysqlFilesRepository'
import { DeleteFileController } from './DeleteFileController'
import { DeleteFileUseCase } from './DeleteFileUseCase'
const mysqlFilesRepository = new MysqlFilesRepository()
const deleteFileUseCase = new DeleteFileUseCase(mysqlFilesRepository)
const deleteFileController = new DeleteFileController(deleteFileUseCase)

export { deleteFileController, deleteFileUseCase }
