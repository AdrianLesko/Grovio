import express from 'express'
import 'dotenv/config'
const port = process.env.PORT
import mongoose from 'mongoose'
import cors from 'cors'
import helmet from 'helmet'
import { rateLimit } from 'express-rate-limit'
import { handleNotFoundError, handleFinalError } from './middleware/error.middleware.js'

import itemRouter from './routers/itemRouter.js'
import authRouter from './routers/authRouter.js'
import groupRouter from './routers/groupRouter.js'

import { verifyToken } from './middleware/auth.middleware.js'
import { checkGroup } from './middleware/checkGroup.middleware.js'

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 25,
  message: {msg: 'Príliš veľa pokusov o prihlásenie. Skúste to znova o 15 minút'},
  standardHeaders: 'draft-8',
  legacyHeaders: false,
})

const allowedOrigins = ['http://localhost:5173', process.env.CLIENT_URL].filter(Boolean)
const app = express()
app.use(helmet())
app.use(express.json())
app.use(cors({
  origin: allowedOrigins
}))


app.use('/api/auth',authLimiter, authRouter)
app.use('/api/groups/:groupId/items', verifyToken, checkGroup, itemRouter)
app.use('/api/groups/', groupRouter)


app.use(handleNotFoundError)
app.use(handleFinalError) 

run()
async function run () {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`server running on port: ${port}`)
      console.log('DB connected...')
    })
  } catch (err){
    console.error(err.name,err.message)
  }
}