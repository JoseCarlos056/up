import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
interface IDecoded{
    id: string;
    iat: number;
    exp: number;
}
export default function authMiddleware (request: Request, response: Response, next:NextFunction) {
  const { authorization } = request.headers
  if (!authorization) return response.status(401).send({ message: 'No token provided' })
  const token = authorization.replace('Bearer', '').trim()
  try {
    jwt.verify(token, 'secret', (err, decoded) => {
      if (err) {
        return response
          .status(401)
          .send({ error: 'Invalided Token' })
      }
      const { id } = decoded as IDecoded
      request.userId = id
      return next()
    })
  } catch (error) {
    return response.status(401).send({ message: 'Invalided Token' })
  }
}
