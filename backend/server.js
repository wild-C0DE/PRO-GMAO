const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const path = require("path");
const morgan = require("morgan");
const config = require("config");
const helmet = require("helmet");
const uri = process.env.URI;
const PORT = process.env.PORT || 8080;
const app = express();

require('dotenv').config()
// set a bunch of http headers on the site and secure them prevent click jacking
app.use(helmet());



const addMachine = require("./routes/api/users");

//middlewares
app.use(cors())


//import routes
const authRoute = require('./routes/auth.js');


// route middlewares
app.use('/api/user', authRoute)



//************************************ */
// ************mongod DB*************
mongoose
  .connect( uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connected successfully");
})
//data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//********************* */
//*******routes******** */

app.use(morgan("tiny"));
//Use routes
app.use("/api/addmachine", addMachine);

app.listen(PORT, console.log(`server is running on port ${PORT}`));
