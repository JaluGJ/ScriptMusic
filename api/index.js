require('dotenv').config()

// en la linea 4 al cachear los modulos se logra hacer la conexion con mongoDB  
require('./mongo.js')

const express = require('express')
const app = express()
const cors = require('cors')
const { PORT } = process.env
const Product = require('./src/models/product/productSchema.js')

app.use(cors())
app.use(express.json())

app.post('/products', (req, res) => {
    const { model, brand, price, type, category, stock, image, description } = req.body

    if(!model || !brand || !price || !type || !category || !stock || !image || !description) {
        return res.status(400).send('Falta informacion necesaria')
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
            return res.send('Producto guardado')
        })
        .catch((err) => {
            return res.status(404).send(err)
        })
})

app.get('/products', (req, res) => {
    const {search} = req.query
    if(search) {
        Product.find({model: {$regex: search, $options: 'i'}})
            .then((products) => {
                return res.json(products).end()
            })
            .catch((err) => {
                return res.status(404).send(err).end()
            }
        )}
    Product.find()
        .then((products) => {
            return res.json(products)
        }
        ).catch((err) => {
            return res.status(404).send(err.name).end()
        }
    )
})

app.get('/products/:id', (req, res) => {
    const {id} = req.params
    Product.findById(id)
        .then((product) => {
            return res.json(product)
        }
        ).catch((err) => {
            return res.status(404).send(err.name).end()
        })
})

app.delete('/products/:id', (req, res) => {
    const { id } = req.params
    Product.findByIdAndDelete(id)
        .then(() => {
            return res.status(204).send('Producto eliminado')
        }
        ).catch((err) => {
            return res.status(404).send(err)
        }
    )
})

app.put('/products/:id', (req, res) => {
    const { id } = req.params
    const { model, brand, price, type, category, stock, image, description } = req.body

    if(!model || !brand || !price || !type || !category || !stock || !image || !description) {
        return res.status(400).send('Falta informacion necesaria')
    }

    Product.findByIdAndUpdate(id, {
        model,
        brand,
        price,
        type,
        category,
        stock,
        image,
        description
    })
    .then(() => {
        return res.json('Producto actualizado exitosamente')
    })
    .catch((err) => {
        return res.status(404).send(err).end()
    })
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

