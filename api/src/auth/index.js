require('dotenv').config()
const { JWT_SECRET } = process.env
const jwt = require('jsonwebtoken')
const User = require('../models/user/userSchema')
const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy
// const JWTStrategy = require('passport-jwt').Strategy
// const ExtractJWT = require('passport-jwt').ExtractJwt

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    await User.findById(id, (err, user) => {
        done(err, user)
    })
})

// passport.use('signup', new LocalStrategy(
//     {
//       usernameField: 'email',
//       passwordField: 'password',
//       passReqToCallback: true
//     },
//     async (req, email, password, done) => {
//         let { firstName, lastName, isAdmin } = req.body
//         try {
//             const user = await User.findOne({ email })
//             if (user) {
//                 return done(null, false, { message: 'El e-mail ya ha sido tomado' })
//             }
//            isAdmin === undefined ? 
//            isAdmin = false :
//            isAdmin = true
//             const newUser = { 
//                 email,
//                 password,
//                 firstName,
//                 lastName,
//                 isAdmin
//            }
//            const userCreated = await User.create(newUser)
//            return done(null, userCreated)
//         } catch (error) {
//             console.log(error)
//         }
//     }
// ))

// passport.use('login', new LocalStrategy(
//     {
//         usernameField: 'email',
//         passwordField: 'password'
//     },
//     async (email, password, done) => {
//         try {
//             console.log("aaaaaa")
//             const user = await User.findOne({ email: email })
//             // const isMatch = user === null ?
//             //  false 
//             //  : await user.isValidPassword(password)
//             // if (!(user && isMatch)) {
//             //     return done(null, false, { message: 'La contraseña o el e-mail son incorrectosS' })
//             // }
//             return done(null, user, { message: 'Te has logueado correctamente' })
//         } catch (error) {
//             done(error)
//         }
//     }
// ))

// passport.use('jwt', new JWTStrategy(
//     {
//         secretOrKey: JWT_SECRET,
//         jwtFromRequest: ExtractJWT.fromUrlQueryParameter('token')
//     },
//     async (token, done) => {
//         try {
//             const user = await User.findById(token.id)
//             if (!user) {
//                 return done(null, false)
//             }
//             return done(null, user)
//         } catch (error) {
//             done(error)
//         }
//     }
// ))