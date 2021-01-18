import { Request, Response } from 'express'
import { GetFileUseCase } from './GetFileUseCase'

class GetFileController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
        private getFileUseCase: GetFileUseCase
  ) {

  }

  async handle (request: Request, response: Response):Promise<Response> {
    const { userId } = request
    try {
      const files = await this.getFileUseCase.execute({ userId })
      return response.status(200).send({ data: files })
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}
export { GetFileController }
