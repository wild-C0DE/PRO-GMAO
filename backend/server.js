const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000;
const app = express();


//middlewares
app.use(express.json());
app.use(cors())


//import routes
const authRoute = require('./routes/auth.js');


// route middlewares
app.use('/api/user', authRoute)


app.listen(PORT, () => console.log('Server is Listening on Port: ', PORT))
