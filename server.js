require('dotenv').config()
const http = require('http')
const express = require('express')
const app = express()
const mongoose = require('mongoose')

console.log('Connecting to MONGODB...')
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log('MONGO DB connection established successfully')
  }
)

app.get('/', (req, res) => {
  res
    .send('App configured correctly')
    .status(200)
    .end()
})

const server = http.createServer(app)

server.listen(process.env.PORT, () => {
  console.log(`Server successfully started on PORT ${process.env.port}`)
})
