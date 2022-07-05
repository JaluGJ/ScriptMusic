require('dotenv').config()

// en la linea 4 al cachear los modulos se logra hacer la conexion con mongoDB ;)
require('./mongo.js')


const express = require('express')
const app = express()
const cors = require('cors')
const { PORT } = process.env
const Product = require('./src/models/product/productSchema.js')

app.use(cors())
app.use(express.json())

app.get('/products', (req, res, next) => {

})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

