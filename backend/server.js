import express from 'express'
import dotenv from 'dotenv/config'
const port = process.env.PORT

const app = express()
app.use(express.json())





run()
function run () {
  try {
    app.listen(port, () => console.log(`server running on port: ${port}`))
  } catch (err){
    console.error(err.name,err.message)
  }
}