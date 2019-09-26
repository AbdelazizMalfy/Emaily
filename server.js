const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

// app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.send({hi:'there'});
});

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`Server is running now on port ${port}`);
})