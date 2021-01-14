import { Router } from 'express'
import multerMiddleware from './middlewares/multerMiddleware'
import { authenticateUserController } from './useCases/AuthenticateUser'
import { createUserController } from './useCases/CreateUser'
import crypto from 'crypto'
import authMiddleware from './middlewares/authMiddleware'
import fs from 'fs'
const router = Router()
router.post('/users', (request, response) => {
  return createUserController.handle(request, response)
})
router.post('/auth', (request, response) => {
  return authenticateUserController.handle(request, response)
})
router.post('/file', authMiddleware, multerMiddleware.single('file'), (request, response) => {
  // console.log(request.file)
  const encrypt = (buffer) => {
    // Create an initialization vector
    const iv = crypto.randomBytes(16)
    // Create a new cipher using the algorithm, key, and iv
    const cipher = crypto.createCipheriv('aes-256-ctr', '12345678998745632147145874512547', iv)
    // Create the new (encrypted) buffer
    const result = Buffer.concat([iv, cipher.update(buffer), cipher.final()])
    return result
  }
  const bff = encrypt(request.file.buffer)

  fs.writeFile('image.txt', bff, () => {

  })
  return response.send(bff.toString('base64'))
})
export { router }
