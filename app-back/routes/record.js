const express = require("express");
const {getRecord,getRecordById, addRecord, updateRecord, deleteRecord}= require('../controller/RecordController') 
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;
 
 
// This section will help you get a list of all the records.
recordRoutes.get("/record",getRecord);
 
// This section will help you get a single record by id
recordRoutes.get("/record/:id",getRecordById);
 
// This section will help you create a new record.
recordRoutes.post("/record/add",addRecord);

// This section will help you update a record by id.
recordRoutes.post("/update/:id",updateRecord);

// This section will help you delete a record
recordRoutes.delete("/:id",deleteRecord);

module.exports = recordRoutes;