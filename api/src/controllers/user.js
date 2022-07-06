const User = require('../models/user/userSchema.js')
const bcrypt = require('bcrypt')

module.exports = {
    
    createUser : (req, res, next) => {
        const { firstName, lastName, email, password } = req.body

        if(!firstName || !lastName || !email || !password) {
            return res.status(400).send('Falta informacion necesaria')
        }
        
        const passHash = bcrypt.hashSync(password, 10)

        const newUser = {
            firstName,
            lastName,
            email,
            password : passHash
        }

        User.create(newUser)
            .then((user) => {
                return res.json(user)
            }
            ).catch((error) => {
                next(error)
            }
        )},

    getAllUsers : (req, res, next) => {
        User.find()
            .then((users) => {
                return res.json(users)
            }
            ).catch((error) => {
                next(error)
            }
        )}
}