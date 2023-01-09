const express = require("express");
//import express from "express";
const app = express();
const cors = require("cors");
//import cors from "cors"

require("dotenv").config({ path: "./config.env" });

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err.message);
  });
  
  console.log(`Server is running on port: ${port}`);
});