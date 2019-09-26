const express = require('express');
// const bodyParser = require('body-parser');
const app = express();

// app.use(bodyParser.json())

// CLIENT_ID 1023944982056-7n8ht52sn7i0n996vg4b14qmbgv5q4tp.apps.googleusercontent.com

// CLIENT_SECRET _hVITBVRcctJk6WtIPYnvF8i

const PORT = process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`Server is running now on port ${PORT}`);
})