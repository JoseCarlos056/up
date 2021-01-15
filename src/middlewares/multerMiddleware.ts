
import multer from 'multer'
import crypto from 'crypto'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(16, (err, hash) => {
      if (err) cb(err, file.originalname)
      const iv = Buffer.from(crypto.randomBytes(16))
      const fileName = `${iv.toString('hex')}-${hash.toString('hex')}-file.${
          file.originalname.split('.').pop()
        }`
      cb(null, fileName)
    })
  }
})
const multerMiddleware = multer({ storage })

export default multerMiddleware
