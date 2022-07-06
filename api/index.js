require('dotenv').config()

// en la linea 4 al cachear los modulos se logra hacer la conexion con mongoDB  
require('./mongo.js')

const express = require('express')
const app = express()
const router = require('./src/routes')
const cors = require('cors')
const { PORT } = process.env
const errorsHandlers = require('./src/middlewares/errorsHandlers.js')

app.use(cors())
app.use(express.json())

app.use('/', router)

app.use(errorsHandlers)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})