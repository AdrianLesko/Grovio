import express from 'express'
import 'dotenv/config'
const port = process.env.PORT
import mongoose from 'mongoose'
import cors from 'cors'
import { handleNotFoundError, handleFinalError } from './middleware/error.middleware.js'

import itemRouter from './routers/itemRouter.js'
import authRouter from './routers/authRouter.js'

const app = express()
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173'
}))


app.use('/api/auth', authRouter)
app.use('/api/items', itemRouter)


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