require('dotenv').config()
const { JWT_SECRET } = process.env
const jwt = require('jsonwebtoken');

const getToken = (payload) => {
    return jwt.sign({id: payload}, JWT_SECRET, { expiresIn: '365d' })
}

const getTokenData = (token) => {
    let data = null
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if(err) {
            console.log('Error al obtener data del token')
        } 
        data = decoded
    })
    return data
}

module.exports = {
    getToken,
    getTokenData
}