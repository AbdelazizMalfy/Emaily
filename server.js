const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')
require('./services/passport');
// const bodyParser = require('body-parser');

mongoose.connect(keys.mongoURI)

const app = express();

// app.use(bodyParser.json())

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`Server is running now on port ${PORT}`);
})