require('dotenv').config()
const { PORT, JWT_SECRET } = process.env

// en la linea 5 al cachear los modulos se logra hacer la conexion con mongoDB  
require('./mongo.js')
require('./src/auth/google')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')


const errorsHandlers = require('./src/middlewares/errorsHandlers.js')
const router = require('./src/routes')

const app = express()


app.use(cors())
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))
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

app.use('/auth', passport.authenticate('auth-google', {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
    ],
    session: false,
}),
router
)

app.use(errorsHandlers)


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})