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
  console.log(request.file)
  const cipher = crypto.createCipher('aes-256-cbc', 'teste122')
  const fileName = request.file.destination + '\\' + request.file.filename
  const input = fs.createReadStream(fileName)
  const output = fs.createWriteStream(fileName + '.enc')
  input.pipe(cipher).pipe(output)
  output.on('finish', function () {
    fs.unlink(fileName, (err) => {
      if (err) throw err
      console.log('Encrypted  file written to disk!')
    })
  })
  return response.send(true)
})
export { router }
