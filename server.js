const express = require('express');
require('./services/passport');
// const bodyParser = require('body-parser');



const app = express();

// app.use(bodyParser.json())

require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`Server is running now on port ${PORT}`);
})