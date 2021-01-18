import { MysqlFilesRepository } from '../../repositories/implementations/MysqlFilesRepository'
import { GetFileController } from './GetFileController'
import { GetFileUseCase } from './GetFileUseCase'
const mysqlFilesRepository = new MysqlFilesRepository()
const getFileUseCase = new GetFileUseCase(mysqlFilesRepository)
const getFileController = new GetFileController(getFileUseCase)

export { getFileController, getFileUseCase }
