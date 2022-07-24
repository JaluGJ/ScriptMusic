const bcrypt = require('bcrypt')
const { getTemplate, sendEmail, getTemplateBaned, getTemplateBanUser, getTemplateUnBanUser, getTemplateForgotPasswordNewPassword, getTemplateForgotPassword} = require('../config/mail.config.js')
const getToken = require('../config/jwt.config.js').getToken
const getTokenData = require('../config/jwt.config.js').getTokenData
const User = require('../models/user/userSchema.js')
const BannedUser = require('../models/bannedUsers/bannedUsersSchema.js')



module.exports = {


    googleLogin: async (req, res, next) => {
        try {
            const { _id } = req.user
            const token = getToken(_id)
            res.status(200).json({ token })
        }
        catch (error) {
            next(error)
        }
    },


    registerUser: async (req, res, next) => {

        let { email, password, firstName, lastName, isAdmin, pushToken } = req.body

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
                password: await bcrypt.hash(password, 10),
                firstName,
                lastName,
                isAdmin,
                pushToken
            }

            const ban = await BannedUser.findOne({ email })
            if (ban) {
                const template = getTemplateBaned(ban.email)
                await sendEmail(template)
                return res.status(404).json({ message: 'El usuario ha sido baneado' })
            }

            const userCreated = await User.create(newUser)
            const token = getToken(userCreated._id)
            const template = getTemplate(userCreated.firstName, token)

            await sendEmail(userCreated.email, 'Confirmar cuenta', template)
            return res.status(200).json({ userCreated })
        } catch (error) {
            next(error)
        }
    },


    forgotPassword: async (req, res, next) => {
        const { email } = req.body
        try {
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(404).json({ message: 'El e-mail no existe' })
            }
            const token = getToken(user._id)
            const template = getTemplateForgotPassword(user.firstName, token)
            await sendEmail(user.email, 'Recuperar contraseña', template)
            return res.status(200).json({ message: 'Se ha enviado un correo para recuperar la contraseña' })
        } catch (error) {
            next(error)
        }
    },


    forgotPasswordUser: async (req, res, next) => {
        const { token } = req.params
        try {
            const data = getTokenData(token)
            if(!data){
                return res.status(401).json({ message: 'El token o el usuario no existe' })
            }
            const user = await User.findById(data.id)
            if (!user) {
                return res.status(404).json({ message: 'El token o el usuario no existe' })
            }
            const newUserPassword = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
            user.password = await bcrypt.hash(newUserPassword, 10)
            await user.save()
            const template = getTemplateForgotPasswordNewPassword(user.firstName, newUserPassword)
            await sendEmail(user.email, 'Nueva contraseña', template)
            return res.status(200).json({ message: 'Se ha cambiado la contraseña por una provisional' })
        } catch (error) {
            next(error)
        }
    },


    resetPassword: async (req, res, next) => {
        
        const autorization = req.get('Authorization')
        if (!autorization) {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        const token = autorization.split(' ')[1]
        const data = getTokenData(token)
        if (!data) {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        const user = await User.findById(data.id)
        if (!user) {
            return res.status(404).json({ message: 'El usuario no existe' })
        }
        if(!user.isConfirmed){
            return res.status(404).json({ message: 'El usuario no ha confirmado su cuenta' })
        }

        let { email, password, newPassword } = req.body
        try {
            if (!password || !newPassword) {
                return res.status(404).json({ message: 'Todos los campos son obligatorios' })
            }
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(404).json({ message: 'E-mail o contraseña incorrecta' })
            }
            const isMatch = await user.comparePassword(password)
            if (!isMatch) {
                return res.status(401).json({ message: 'E-mail o contraseña incorrecta' })
            }
            newPassword = await bcrypt.hash(password, 10)
            user.password = newPassword
            await user.save()
            return res.json({ message: 'Se ha cambiado la contraseña' })
        } catch (error) {
            next(error)
        }
    },


    addUserFromAdmin: async (req, res, next) => {

        const autorization = req.get('Authorization')
        if (!autorization) {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        const token = autorization.split(' ')[1]
        const data = getTokenData(token)
        if (!data) {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        const user = await User.findById(data.id)
        if (!user.isAdmin) {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }

        const { email, password, firstName, lastName, image, pushToken } = req.body

        if (!email) return res.status(404).json({ msg: 'Falta enviar correo electrónico' });
        if (!password) return res.status(404).json({ msg: 'Falta rellenar la contraseña' });
        if (!firstName) return res.status(404).json({ msg: 'Falta enviar el nombre' });
        if (!lastName) return res.status(404).json({ msg: 'Falta enviar el apellido' });

        if(User.findOne({ email })){
            return res.status(404).json({ msg: 'El correo electrónico ya existe' });
        }

        try {
            const newUser = new User({
                email,
                password,
                firstName,
                lastName,
                image,
                isAdmin: true,
                pushToken
            })
            const userCreated = await newUser.save()
            return res.status(200).json({ userCreated })
        } catch (error) {
            next(error)
        }
    },


    confirmUser: async (req, res, next) => {
        const { token } = req.params
        try {
            const data = getTokenData(token)
            const user = await User.findById(data.id)
            if (!user) {
                return res.status(404).json({ message: 'El usuario no existe' })
            }
            if (data === null) {
                return res.status(404).json({ message: 'El token no existe' })
            }
            if (user.isConfirmed) {
                return res.status(404).json({ message: 'El usuario ya ha sido confirmado' })
            }
            user.isConfirmed = true
            await user.save()
            return res.status(200).json({ message: 'El usuario ha sido confirmado, ya puedes logearte en la app' })
        } catch (error) {
            next(error)
        }
    },


    loginUser: async (req, res, next) => {
        const { email, password } = req.body
        try {
            const user = await User.findOne({ email })
            let validate = user === null ?
                false
                : await user.isValidPassword(password)
            if (!validate) {
                return res.status(401).json({ message: 'La contraseña o el e-mail son incorrectos' })
            }
            const token = getToken(user._id)
            if (user.isAdmin) {
                return res.status(200).json({ token })
            }
            if (!user.isConfirmed) {
                return res.status(401).json({ message: 'El usuario no ha confirmado su cuenta' })
            }
            return res.json({ token })
        } catch (error) {
            next(error)
        }
    },


    loginAdmin: async (req, res, next) => {
        const { email, password } = req.body
        try {
            const user = await User.findOne({ email })
            let validate = user === null ?
                false
                : await user.isValidPassword(password)
            if (!validate) {
                return res.status(401).json({ message: 'La contraseña o el e-mail son incorrectos' })
            }
            if (!user.isAdmin) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const token = getToken(user._id)
            return res.json({ token })
        } catch (error) {
            next(error)
        }
    },


    profileAdmin: async (req, res, next) => {
        try {
            const autorization = req.get('Authorization')
            if (!autorization) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const token = autorization.split(' ')[1]
            const data = getTokenData(token)
            if (!data) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const user = await User.findById(data.id)
            if (!user) {
                return res.status(404).json({ message: 'No se ha encontrado usuario' })
            }
            if (!user.isAdmin) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            return res.json({ user })
        } catch (error) {
            next(error)
        }
    },


    profile: async (req, res, next) => {
        try {
            const autorization = req.get('Authorization')
            if (!autorization) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const token = autorization.split(' ')[1]
            const data = getTokenData(token)
            if (!data) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const user = await User.findById(data.id).populate({
                path: "bought",
                select: {
                    quantity: 1,
                    date: 1,
                    _id: 1
                },
                populate: {
                    path: "items",
                    select: {
                        model: 1,
                        brand: 1,
                        price: 1,
                        type: 1,
                        category: 1,
                        image: 1,
                        description: 1,
                        _id: 1
                    }
                }
            }).populate("favourites", {
                model: 1,
                brand: 1,
                price: 1,
                type: 1,
                category: 1,
                image: 1,
                description: 1,
                _id: 1
            })
            if (!user) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            return res.json({ user })
        } catch (error) {
            next(error)
        }
    },


    updateProfile: async (req, res, next) => {
        try {
            const autorization = req.get('Authorization')
            if (!autorization) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const token = autorization.split(' ')[1]
            const data = getTokenData(token)
            if (!data) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const user = await User.findById(data.id)
            if (!user) {
                return res.status(404).json({ message: 'No se ha encontrado el usuario' })
            }

            const { firstName, lastName, image } = req.body

            if (!firstName && !lastName && !image) {
                return res.status(400).json({ message: 'No se ha modificado ningun dato' })
            }
            if (firstName) {
                user.firstName = firstName
            }
            if (lastName) {
                user.lastName = lastName
            }
            if (image) {
                user.image = image
            }
            user.save()
            return res.json({ user })
        } catch (error) {
            next(error)
        }
    },


    banUser: async (req, res, next) => {
        try {
            const { id } = req.params
            const autorization = req.get('Authorization')
            if (!autorization) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const token = autorization.split(' ')[1]
            const data = getTokenData(token)
            if (!data) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const user = await User.findById(data.id)
            if (!user) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            if (!user.isAdmin) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const userToBan = await User.findById(id)
            if (!userToBan) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const { email, firstName, _id } = userToBan
            const template = getTemplateBanUser(firstName)
            await sendEmail(email, 'Hoy tenemos una mala noticia',template)
            await BannedUser.create({ email, banID: _id })
            await userToBan.remove()
            return res.json({ message: 'Usuario baneado' })
        } catch (error) {
            next(error)
        }
    },


    unBanUser: async (req, res, next) => {
        try {
            const { id } = req.params
            const autorization = req.get('Authorization')
            if (!autorization) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const token = autorization.split(' ')[1]
            const data = getTokenData(token)
            if (!data) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const user = await User.findById(data.id)
            if (!user) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            if (!user.isAdmin) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const userToUnBan = await BannedUser.findOne({ banID: id })
            if (!userToUnBan) {
                return res.status(404).json({ message: 'No se ha encontrado el usuario' })
            }
            const { email } = userToUnBan
            const template = getTemplateUnBanUser(email)
            await sendEmail(email, 'Hoy tenemos una buena noticia' ,template)
            await userToUnBan.remove()
            return res.json({ message: 'Usuario desbaneado' })
        } catch (error) {
            next(error)
        }
    },


    getUserBanned: async (req, res, next) => {
        try {
            const autorization = req.get('Authorization')
            if (!autorization) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const token = autorization.split(' ')[1]
            const data = getTokenData(token)
            if (!data) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            const user = await User.findById(data.id)
            if (!user) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            if (!user.isAdmin) {
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            try {
                const bannedUsers = await BannedUser.find()
                if(!bannedUsers || bannedUsers.length === 0) {
                    return res.status(404).json({ message: 'No se han encontrado usuarios baneados' })
                }
                return res.json({ bannedUsers })   
            } catch (error) {
                next(error)
            }
        } catch (error) {
            next(error)
        }
    },


    getAllUsers: async (req, res, next) => {
        const autorization = req.get('Authorization')
        if (!autorization) {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        const token = autorization.split(' ')[1]
        const data = getTokenData(token)
        if (!data) {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        const user = await User.findById(data.id)
        if (!user) {
            return res.status(401).json({ message: 'No se ha encontrado al usuario' })
        }
        if (!user.isAdmin) {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        try {
            const users = await User.find({})
            return res.json({ users })
        } catch (error) {
            next(error)
        }
    },


    getOneUser: async (req, res, next) => {
        const autorization = req.get('Authorization')
        if (!autorization) {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        const token = autorization.split(' ')[1]
        const data = getTokenData(token)
        if (!data) {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        const user = await User.findById(data.id)
        if (!user) {
            return res.status(401).json({ message: 'No se ha encontrado al usuario' })
        }
        if (!user.isAdmin) {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        const { id } = req.params
        User.findById(id).populate({
            path: "bought",
            select: {
                quantity: 1,
                date: 1,
                _id: 1
            },
            populate: {
                path: "items",
                select: {
                    model: 1,
                    brand: 1,
                    price: 1,
                    type: 1,
                    category: 1,
                    image: 1,
                    description: 1,
                    _id: 1
                }
            }
        }).then((users) => {
                if(!users) {
                    return res.status(404).json({ message: 'No se ha encontrado al usuario' })
                }
                return res.json(users)
            }).catch((error) => {
                next(error)
            })
    },

    deleteUser: async (req, res, next) => {
        try {
        const autorization = req.get('Authorization')
        if (!autorization) {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        const token = autorization.split(' ')[1]
        const data = getTokenData(token)
        if (!data) {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        const user = await User.findById(data.id)
        if (!user) {
            return res.status(401).json({ message: 'No se ha encontrado al usuario' })
        }
        if (!user.isAdmin) {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }

        let {userDelete} = req.body
        
        await User.findByIdAndDelete(userDelete)

        return res.json({ message: "usuario eliminado con exito" })
            
        } catch (error) {
            next(error)
        }
    },


    validateToken: async (req, res, next) => {
        const autorization = req.get('Authorization')
        if (!autorization) {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        if (autorization.split(' ')[0].toLowerCase() !== 'bearer') {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        const token = autorization.split(' ')[1]
        const data = getTokenData(token)
        if (!data) {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        const user = await User.findById(data.id)
        if (!user) {
            return res.status(401).json({ message: 'No se ha encontrado al usuario' })
        }
        if (!user.isAdmin) {
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }
        return res.json({ user: user.email })
    }
}