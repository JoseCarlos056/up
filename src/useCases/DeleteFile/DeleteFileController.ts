import { Request, Response } from 'express'
import { DeleteFileUseCase } from './DeleteFileUseCase'

class DeleteFileController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
        private deleteFileUseCase: DeleteFileUseCase
  ) {

  }

  async handle (request: Request, response: Response):Promise<Response> {
    const { id } = request.params
    try {
      await this.deleteFileUseCase.execute({ id })
      return response.status(200).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}
export { DeleteFileController }
