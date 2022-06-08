import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './db/mysql.js'
import User from './models/User.js'

//settings
dotenv.config()
const port = process.env.PORT || 4000
const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.get('/', (req, res) => {
  User.create({
    user: 'Fdo',
    email: 'fdo@gmail.com',
  }).then((user) => {
    //res.json({ mensaje: 'OK' })
    res.json(user)
  })
  console.log('home ok ')
  //res.send('res ok') //hasta HTML puedo enviar
})

//Inicio del servidor
const main = async () => {
  await app.listen(port)
  console.log(`Api ejecutandose en http://localhost:${port}`)
  await connectDB()
}

main()
