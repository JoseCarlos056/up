import { Router } from 'express'
import { authenticateUserController } from './useCases/AuthenticateUser'
import { createUserController } from './useCases/CreateUser'

const router = Router()
router.post('/users', (request, response) => {
  return createUserController.handle(request, response)
})
router.post('/auth', (request, response) => {
  return authenticateUserController.handle(request, response)
})
export { router }
