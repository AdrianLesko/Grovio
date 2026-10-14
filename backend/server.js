import express from 'express'
import dotenv from 'dotenv/config'
const port = process.env.PORT
import mongoose from 'mongoose'
import cors from 'cors'
import { handleNotFoundError, handleFinalError } from './middleware/error.middleware.js'

import itemRouter from './routes/itemRoutes.js'

const app = express()
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5137'
}))
app.use('/items', itemRouter)


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