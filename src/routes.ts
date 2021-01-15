import { Router } from 'express'
import multerMiddleware from './middlewares/multerMiddleware'
import { authenticateUserController } from './useCases/AuthenticateUser'
import { createUserController } from './useCases/CreateUser'
import authMiddleware from './middlewares/authMiddleware'
import { uploadFileController } from './useCases/UploadFile'
const router = Router()
router.post('/users', (request, response) => {
  return createUserController.handle(request, response)
})
router.post('/auth', (request, response) => {
  return authenticateUserController.handle(request, response)
})
router.post('/file', authMiddleware, multerMiddleware.single('file'), (request, response) => {
  return uploadFileController.handle(request, response)
})
export { router }
