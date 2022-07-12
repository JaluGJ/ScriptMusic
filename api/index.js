require('dotenv').config()

// en la linea 4 al cachear los modulos se logra hacer la conexion con mongoDB  
require('./mongo.js')
require('./src/auth')
const express = require('express')
const app = express()
const router = require('./src/routes')
const cors = require('cors')
const morgan = require('morgan')
const { PORT, JWT_SECRET } = process.env
const errorsHandlers = require('./src/middlewares/errorsHandlers.js')
const passport = require('passport')
const session = require('express-session')


app.use(cors())
app.use(morgan("dev"))
app.use(express.static('public'))
app.use(express.json())
app.use(session({
    secret: JWT_SECRET,
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/', router)

app.use(errorsHandlers)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})