require('dotenv').config();
const passport = require('passport');
const {OAuth2Strategy} = require('passport-google-oauth');
const User= require('../models/user/userSchema')
const jwt = require('jsonwebtoken')

const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRECT, JWT_SECRET} = process.env;

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    await User.findById(id, (err, user) => {
        done(err, user)
    })
})



passport.use('auth-google', new OAuth2Strategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRECT,
        callbackURL: "http://localhost:3001/auth/google",
}, async (accessToken, refreshToken, profile, done)=>{
    //console.log('accessToken',accessToken, 'refreshToke', refreshToken, 'profile', profile, 'done', done)
try {
    const response = await User.findOne({email: profile.emails[0].value})
    // console.log("resposnse",response)
        if(response){
            console.log(response)
            const token = jwt.sign({id: response._id}, JWT_SECRET)
            done(null, token)
        }else {
            const newUser={
                email: profile.emails[0].value,
                lastName: profile.name.familyName,
                firstName: profile.name.givenName,
                isAdmin: false
            }
            console.log("antes de crear el usuario")
            const userCreated = await User.create(newUser)
            console.log("userCreated" ,userCreated)
            done(null, userCreated);
    
        }
} catch (error) {
    console.log(error)
}
   }
  )
)
