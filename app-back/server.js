// Requirements
const express = require('express');
const app = express();
const cors = require('cors');
const connectDb = require('./db/conn');
require('dotenv').config({ path: './config.env' });

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require('./routes/record'));


app.listen(port, () => {
  // perform a database connection when server starts
  connectDb();
  console.log(`Server is running on port: ${port}`);
});
