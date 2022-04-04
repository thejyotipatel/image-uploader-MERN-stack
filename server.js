import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import morgan from 'morgan'

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

import connectDB from './db/connect.js'
// routers
import imgRouter from './router/imgRouter.js'
// middleware
import notFoundMiddleware from './middleware/not-found.js'

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.use(express.json())

const __dirname = dirname(fileURLToPath(import.meta.url))

// app.use(express.static(path.resolve(__dirname, '/client')))
app.use('./images', express.static('images'))

app.use('/api/v1', imgRouter)
app.get('/', (req, res) => {
  res.send({ app: 'img-uploader' })
})

app.use(notFoundMiddleware)

const port = process.env.PORT || 4000
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`server is listeing on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
