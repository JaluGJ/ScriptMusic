// const bcrypt = require('bcrypt')
// const passport = require('passport');
// const { OAuth2Strategy } = require('passport-google-oauth');
// const User = require('../models/user/userSchema');
// const getToken = require('../config/jwt.config.js').getToken
// const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRECT, JWT_SECRET, SECURE_PASS } = process.env;


// passport.use('auth-google', new OAuth2Strategy(
//     {
//         clientID:"61373446418-l6s22h7k8dbslkpdt3bq8ikp8u1rna5v.apps.googleusercontent.com",
//         clientSecret:"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",
//         callbackURL: "https://sm.up.railway.app/auth/google",
//     }, async (accessToken, refreshToken, profile, done)=>{
//         try {
//             const user = await User.findOne({email: profile.emails[0].value})
//             if(user){
//                 const token = getToken(user._id)
//                 done(null, token)
//             }else {
//                 const newUser={
//                     email: profile.emails[0].value,
//                     lastName: profile.name.familyName,
//                     firstName: profile.name.givenName,
//                     isConfirmed: true,
//                     password: bcrypt.hashSync("123456", 10),
//                 }
//                 const userCreated = await User.create(newUser)
//                 done(null, userCreated);
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }
// ))