require('dotenv').config()
const mongoose = require('mongoose')
const {DB_PASS} = process.env

const connectionString = `mongodb+srv://jalugj:${DB_PASS}@cluster0.ncpug.mongodb.net/?retryWrites=true&w=majority`

//prueba muestra a ivan
//conneccion con mongoDB

mongoose.connect(connectionString)
    .then(()=>{
        console.log('Database connected')
    }).catch(err=>{
        console.error(err)
    })