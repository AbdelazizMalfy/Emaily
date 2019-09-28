const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');


// Generate Token by encoding user id and cookiekey
passport.serializeUser((user,done)=>{
    done(null,user.id)
})

// Get the user back from decoding the token and the cookiekey

passport.deserializeUser((id,done)=>{
    User.findById(id)
        .then((user)=>{
            done(null,user)
        })
})

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy:true
}, (accessToken, refreshToken, profile,done) => {
    User.findOne({googleId:profile.id})
        .then( foundUser => {
            if (foundUser){
                // Already exist in the DB don't creat it again
                done(null,foundUser);
            } else {
                // Doesn't exist in the DB create a new record
                const user = new User({googleId : profile.id})
                user.save().then(user=> done(null,user))
            }
        })
}))




