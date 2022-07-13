require('dotenv').config()
const { JWT_SECRET } = process.env
const jwt = require('jsonwebtoken')
const User = require('../models/user/userSchema.js')


module.exports = {
    
    registerUser : async (req, res, next) => {
        let { email, password, firstName, lastName, isAdmin } = req.body
        try {
            const user = await User.findOne({ email })
            if (user) {
                return res.status(404).json({ message: 'El e-mail ya ha sido tomado' })
            }
            isAdmin === undefined ?
            isAdmin = false :
            isAdmin = true
            const newUser = {
                email,
                password,
                firstName,
                lastName,
                isAdmin
            }
            const userCreated = await User.create(newUser)
            return res.status(200).json({ userCreated })
        } catch (error) {
            next(error)
        }
    },

    loginUser : async (req, res, next) => {
        const { email, password } = req.body
        try {
            const user = await User.findOne({ email })
            let validate = user === null ?
            false 
            : await user.isValidPassword(password)
            if(!validate){
                return res.status(401).json({ message: 'La contraseña o el e-mail son incorrectos' })
            }
            const token = jwt.sign({ id: user._id }, JWT_SECRET)
            return res.json({ token })
        } catch (error) {
            next(error)
        }
    },

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