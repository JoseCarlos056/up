import 'reflect-metadata'
import express from 'express'
import './database/connect'
import { router } from './routes'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
app.use(express.static('uploads'))
export { app }
