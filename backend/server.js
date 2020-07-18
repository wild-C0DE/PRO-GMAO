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
const AutoIncrementFactory = require('mongoose-sequence');

// require('dotenv').config()
// set a bunch of http headers on the site and secure them prevent click jacking
app.use(helmet());
const db = config.get("MONGO_URI")



//middlewares
app.use(cors())


const authRoute = require('./routes/auth.js');
const workOrder = require('./routes/workOrderRoutes/work-order');
const addMachine = require("./routes/machinesRoutes/machinesRoute");


// route middlewares
app.use('/api/user', authRoute)



//************************************ */
// ************mongod DB*************
mongoose
  .connect( db , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  
const connection =  mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connected successfully");
})
const AutoIncrement = AutoIncrementFactory(connection);

//data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//********************* */
//*******routes******** */

app.use(morgan("tiny"));
//Use routes
app.use("/api/addmachine", addMachine);
app.use('/api/workOrder', workOrder)

app.listen(PORT, console.log(`server is running on port ${PORT}`));
