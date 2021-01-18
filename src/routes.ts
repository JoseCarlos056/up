import { Router } from 'express'
import multerMiddleware from './middlewares/multerMiddleware'
import { authenticateUserController } from './useCases/AuthenticateUser'
import { createUserController } from './useCases/CreateUser'
import authMiddleware from './middlewares/authMiddleware'
import { uploadFileController } from './useCases/UploadFile'
import { getFileController } from './useCases/GetFile'
import { deleteFileController } from './useCases/DeleteFile'
const router = Router()
router.post('/users', async (request, response) => {
  return await createUserController.handle(request, response)
})
router.post('/auth', async (request, response) => {
  return await authenticateUserController.handle(request, response)
})
router.post('/file', authMiddleware, multerMiddleware.single('file'), async (request, response) => {
  return await uploadFileController.handle(request, response)
})
router.get('/file', authMiddleware, async (request, response) => {
  return await getFileController.handle(request, response)
})
router.delete('/file', authMiddleware, async (request, response) => {
  return await deleteFileController.handle(request, response)
})
export { router }
