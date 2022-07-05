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

app.post('/products', (req, res, next) => {
    const { model, brand, price, type, category, stock, image, description } = req.body

    if(!model || !brand || !price || !type || !category || !stock || !image || !description) {
        res.status(400).send('Missing data')
    }

    const product = new Product({
        model,
        brand,
        price,
        type,
        category,
        stock,
        image,
        description
    })

    product.save()
        .then(() => {
            res.send('Producto guardado')
        }
        ).catch((err) => {
            res.send(err)
        })
})

app.get('/products', (req, res, next) => {
    Product.find()
        .then((products) => {
            res.send(products)
        }
        ).catch((err) => {
            res.send(err)
        }
    )
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

