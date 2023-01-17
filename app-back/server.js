const express = require("express");
const authClientRoute = require('./routes/authClient')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config/config.env" });

const port = process.env.PORT || 5000;
connectDB()
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
//app.use("/",require("./routes/record"));



 
app.listen(port, () => {
  // perform a database connection when server starts
 
  
  console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${port}`);
});