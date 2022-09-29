


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

        const { email, password, firstName, lastName, pushToken } = req.body

        try {
            const user = await User.findOne({ email })
            if (user) {
                return res.status(404).json({ message: 'Ya existe un usuario registrado con ese email, prueba con otro.' })
            }

            const newUser = {
                email,
                password: await bcrypt.hash(password, 10),
                firstName,
                lastName,
                pushToken
            }

            const userCreated = await User.create(newUser)
            const token = getToken(userCreated._id)
            const template = getTemplate(userCreated.firstName, token)

            await sendEmail(userCreated.email, 'Confirmar cuenta', template)
            return res.status(200).json({ userCreated, message: 'Se ha enviado un correo para confirmar la cuenta.' })
        } catch (error) {
            next(error)
        }
    },


    forgotPassword: async (req, res, next) => {
        const { email } = req.body
        try {
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(404).json({ message: 'El email no existe' })
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
            if (!password || !newPassword || !email) {
                return res.status(404).json({ message: 'Todos los campos son obligatorios.' })
            }
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(404).json({ message: 'Email o contraseña incorrectos.' })
            }
            const isMatch = await user.isValidPassword(password)
            if (!isMatch) {
                return res.status(401).json({ message: 'Email o contraseña incorrectos.' })
            }
            newPassword = await bcrypt.hash(newPassword, 10)
            user.password = newPassword
            await user.save()
            return res.json({ message: 'Tu contraseña se ha cambiado con éxito.' })
        } catch (error) {
            next(error)
        }
    },


    resetPasswordAdmin: async (req, res, next) => {
        
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
        if(!user.isAdmin){
            return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
        }

        let { email, password, newPassword } = req.body
        try {
            if (!password || !newPassword || !email) {
                return res.status(404).json({ message: 'Todos los campos son obligatorios.' })
            }
            const user = await User.findOne({ email })
            if (!user) {
                return res.status(404).json({ message: 'Email o contraseña incorrectos.' })
            }
            const isMatch = await user.isValidPassword(password)
            if (!isMatch) {
                return res.status(401).json({ message: 'Email o contraseña incorrectos.' })
            }
            if(!user.isAdmin){
                return res.status(401).json({ message: 'No tienes permisos para hacer esto' })
            }
            newPassword = await bcrypt.hash(newPassword, 10)
            user.password = newPassword
            await user.save()
            return res.json({ message: 'Tu contraseña se ha cambiado con éxito.' })
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

        try {

            const { email, password, firstName, lastName } = req.body

            if (!email || !password || !firstName || !lastName) {
                return res.status(404).json({ message: 'Todos los campos son obligatorios.' })
            }
    
            const userExist = await User.findOne({ email })

            if (userExist) return res.status(404).json({ msg: 'El correo electrónico ya existe' });

            const newUser = new User({
                email,
                password: await bcrypt.hash(password, 10),
                firstName,
                lastName,
                isAdmin: true,
                isConfirmed: true
            })

            const userCreated = await newUser.save()
            const template = getTemplateAdminRegister(userCreated.firstName)
            await sendEmail(userCreated.email, 'Bienvenido a la plataforma de gestión de proyectos', template)
            return res.json({ userCreated })
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
                return res.sendFile(path.join(__dirname, '../../public/404.html'))
            }
            if (data === null) {
                return res.sendFile(path.join(__dirname, '../../public/noToken.html'))
            }
            if (user.isConfirmed) {
                return res.sendFile(path.join(__dirname, '../views/confirm.html'))
            }
            user.isConfirmed = true
            await user.save()
            return res.sendFile(path.join(__dirname, '../views/confirm.html'))
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
                return res.status(401).json({ message: 'La contraseña o el email son incorrectos.' })
            }
            const token = getToken(user._id)
            if (user.isAdmin) {
                return res.status(200).json({ token })
            }
            if (!user.isConfirmed) {
                return res.status(401).json({ message: 'El usuario no ha confirmado su cuenta.' })
            }
            if(user.isBan){
                return res.status(401).json({ message: 'El usuario ha sido baneado.' })
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
                return res.status(401).json({ message: 'La contraseña o el email son incorrectos' })
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


    updateProfileAdmin: async (req, res, next) => {

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

        try {
            const { firstName, lastName, image } = req.body

            if(!firstName || !lastName || !image){
                return res.status(404).json({ message: 'Falta rellenar los campos' })
            }
            
            if (firstName) user.firstName = firstName
            if (lastName) user.lastName = lastName
            if (image) user.image = image
            await user.save()
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
                const { id } = req.params

                const userToBan = await User.findById(id)
                if (!userToBan) {
                    return res.status(404).json({ message: 'No se ha encontrado el usuario' })
                }
                if(userToBan.isBan){
                    return res.status(400).json({ message: 'El usuario ya esta baneado' })
                }
                const { email, firstName } = userToBan
                const template = getTemplateBanUser(firstName)
                await sendEmail(email, 'Hoy tenemos una mala noticia',template)
                userToBan.isBan = true
                userToBan.save()
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
            const userToUnBan = await User.findById(id)
            if (!userToUnBan) {
                return res.status(404).json({ message: 'No se ha encontrado el usuario' })
            }
            if(!userToUnBan.isBan){
                return res.status(400).json({ message: 'El usuario no esta baneado' })
            }
            userToUnBan.isBan = false
            userToUnBan.save()
            const { firstName } = userToUnBan
            const template = getTemplateUnBanUser(firstName)
            await sendEmail(email, 'Hoy tenemos una buena noticia' ,template)
            return res.json({ message: 'Usuario desbaneado' })
        } catch (error) {
            next(error)
        }
    },


    getUserBanned: async (req, res, next) => {
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
                const usersBan = await User.find({ isBan: true })
                if(!usersBan || usersBan.length === 0){
                    return res.status(404).json({ message: 'No hay usuarios baneados' })
                }
                return res.json({ usersBan })
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
            const { id } = req.params
            const user = await User.findById(id)
            if (!user) {
                return res.status(404).json({ message: 'No se ha encontrado al usuario' })
            }
            await user.remove()
            return res.json({ message: 'Usuario eliminado' })
        } catch (error) {
            next(error)
        }
    },


    changeEmail: async (req, res, next) => {
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

        try {
            const { email, password, newEmail } = req.body
        
            if (email !== user.email || !password) {
                return res.status(401).json({ message: 'Email o contraseña incorrectos.' })
            }

            const newUser = await User.findOne({ email: newEmail })
            if (newUser) {
                return res.status(401).json({ message: 'El email ya está en uso.' })
            }
            const isMatch = await user.isValidPassword(password)
            if (!isMatch) {
                return res.status(401).json({ message: 'Email o contraseña incorrectos.' })
            }
            const data = getToken(user.id)
            const emailEncripted = getToken(newEmail)
            const token = data + '~' + emailEncripted
            const template = getTemplateChangeEmail(user.firstName, email, newEmail, token)
            await sendEmail(newEmail, 'Cambio de Email', template)
            return res.json({ message: 'Revisa la bandeja de entrada de tu nuevo email para confirmar los cambios.' })
        } catch (error) {
            next(error)
        }
    },


    changeEmailAdmin: async (req, res, next) => {
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
            const { email, password, newEmail } = req.body
        
            if (email !== user.email || !password) {
                return res.status(401).json({ message: 'Email o contraseña incorrectos.' })
            }

            const newUser = await User.findOne({ email: newEmail })
            if (newUser) {
                return res.status(401).json({ message: 'El email ya está en uso.' })
            }
            const isMatch = await user.isValidPassword(password)
            if (!isMatch) {
                return res.status(401).json({ message: 'Email o contraseña incorrectos.' })
            }
            const data = getToken(user.id)
            const emailEncripted = getToken(newEmail)
            const token = data + '~' + emailEncripted
            const template = getTemplateChangeEmail(user.firstName, email, newEmail, token)
            await sendEmail(newEmail, 'Cambio de Email', template)
            return res.json({ message: 'Revisa la bandeja de entrada de tu nuevo email para confirmar los cambios.' })
        } catch (error) {
            next(error)
        }
    },


    changeEmailUser : async (req, res, next) => {
        const { token } = req.params
        try {
            const tokenData = token.slice(0, token.indexOf('~'))
            const emailData = token.slice(token.indexOf('~') + 1)

            const email = getTokenData(emailData).id
            const data = getTokenData(tokenData)

            if (!data) {
                return res.sendFile(path.join(__dirname, '../views/404.html'))
            }
            if(!email) {
                return res.sendFile(path.join(__dirname, '../views/404.html'))
            }
            const user = await User.findById(data.id)
            if (!user) {
                return res.sendFile(path.join(__dirname, '../views/404.html'))
            }
            if(user.email === email) {
                return res.sendFile(path.join(__dirname, '../views/404.html'))
            }
            user.email = email
            await user.save()
            return res.sendFile(path.join(__dirname, '../views/changeEmail.html'))
        } catch (error) {
            next(error)
        }
    },


    changeEmailAdminEmail : async (req, res, next) => {
        const { token } = req.params
        try {
            const tokenData = token.slice(0, token.indexOf('~'))
            const emailData = token.slice(token.indexOf('~') + 1)

            const email = getTokenData(emailData).id
            const data = getTokenData(tokenData)

            if (!data) {
                return res.sendFile(path.join(__dirname, '../views/404.html'))
            }
            if(!email) {
                return res.sendFile(path.join(__dirname, '../views/404.html'))
            }
            const user = await User.findById(data.id)
            if (!user) {
                return res.sendFile(path.join(__dirname, '../views/404.html'))
            }
            if(!user.isAdmin) {
                return res.sendFile(path.join(__dirname, '../views/404.html'))
            }
            if(user.email === email) {
                return res.sendFile(path.join(__dirname, '../views/404.html'))
            }
            user.email = email
            await user.save()
            return res.sendFile(path.join(__dirname, '../views/changeEmail.html'))
        } catch (error) {
            next(error)
        }
    },


    changeRoles : async (req, res, next) => {
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
        try {
            const user = await User.findById(id)
            if (!user) {
                return res.status(404).json({ message: 'No se ha encontrado al usuario' })
            }
            if (user.isAdmin) {
                user.isAdmin = false
                await user.save()
                return res.json({ message: 'El usuario ha sido cambiado' })
            }
            if (!user.isAdmin) {
                user.isAdmin = true
                await user.save()
                const template = getTemplateAdminRegister(user.firstName)
                await sendEmail(user.email, 'Has sido registrado como administrador', template)
                return res.json({ message: 'El usuario ha sido cambiado' })
            }
            return res.json({ message: 'El usuario no se ha cambiado' })
        } catch (error) {
            next(error)
        }
    },



    validateToken: async (req, res, next) => {
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
        return res.json({ user: user.email })
} catch (error) {
    next(error)
    }
}
}
