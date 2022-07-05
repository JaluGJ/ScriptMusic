//coneccion tipica, express, para 
// const server = require('./app.js')
// const { conn } = require('./db.js')

require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const { PORT } = process.env

app.use(cors())
app.use(express.json())

//coneccion con la mongoose para luego hacer los "esquemas"

conn.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`)
    })
})
