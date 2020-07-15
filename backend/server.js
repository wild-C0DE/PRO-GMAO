const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();


//middlewares
app.use(express.json());
app.use(cors())

let Admin = require('./routes/admin.js');
app.use("/admin", Admin)


app.listen(PORT, () => console.log('Server is Listening on Port: ', PORT))
