require('dotenv').config();
const passport = require('passport');
const {OAuth2Strategy} = require('passport-google-oauth');
const User= require('../models/user/userSchema')

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    await User.findById(id, (err, user) => {
        done(err, user)
    })
})

const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRECT} = process.env;


passport.use('auth-google', new OAuth2Strategy(
    {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRECT,
        callbackURL: "http://localhost:3001/auth/google",
}, async (accessToken, refreshToken, profile, done)=>{
    console.log('accessToken',accessToken, 'refreshToke', refreshToken, 'profile', profile, 'done', done)
//const response= emails.includes(profile.emails[0].value)
const response = await User.findOne({email: profile.emails[0].value})
    if(response){
        done(null, profile)
    }else {
        emails.push(profile.emails[0].value)
        done(null, profile);

    }
   }
  )
)
