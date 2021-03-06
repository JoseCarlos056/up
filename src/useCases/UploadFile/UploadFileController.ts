import { Request, Response } from 'express'
import { UploadFileUseCase } from './UploadFileUseCase'

class UploadFileController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
        private uploadFileUseCase: UploadFileUseCase
  ) {

  }

  async handle (request: Request, response: Response):Promise<Response> {
    const { file, userId } = request
    try {
      const filesaved = await this.uploadFileUseCase.execute({ userId, file })
      return response.status(201).send(filesaved)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}
export { UploadFileController }
