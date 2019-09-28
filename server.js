const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');


//Models 
require('./models/user');

//Passport
require('./services/passport');

mongoose.connect(keys.mongoURI)

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKeys]
}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`Server is running now on port ${PORT}`);
})