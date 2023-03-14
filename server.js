import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser' 
import routes from './src/router/index.js'

const app = express()
dotenv.config()
app.use(cors({
  origin:"http://localhost:3000", 
  credentials: true,
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}))

mongoose.set('strictQuery', true)
app.use(express.json())
app.use(cookieParser())
app.use((err, req, res, next) =>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || 'Something went wrong'
  return res.status(errorStatus).send(errorMessage)
})

app.use('/api/v1', routes);

//conection
const connect = async () =>{
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('connected to mongodb ')
  } catch (error) {
    
  }
}
app.listen(8800, () =>{
  connect()
  console.log('Backend is running')
})