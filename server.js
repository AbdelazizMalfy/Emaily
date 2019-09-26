const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy
const keys = require('./config/keys');
// const bodyParser = require('body-parser');



const app = express();

// app.use(bodyParser.json())

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile,done) => {
    console.log(accessToken,"/---------------------",refreshToken,"/---------------", profile)
}))

app.get('/auth/google',passport.authenticate('google',{
    scope: ['profile','email']
}))


app.get('/auth/google/callback', passport.authenticate('google'))


const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`Server is running now on port ${PORT}`);
})