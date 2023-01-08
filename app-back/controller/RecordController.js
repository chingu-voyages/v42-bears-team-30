// This will help us connect to the database
const dbo = require("../db/conn");
 
// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

const getRecord = (req,res) => {
    let db_connect = dbo.getDb("employees");
    db_connect
        .collection("records")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });

}

const getRecordById = (req,res) => {
    let db_connect = dbo.getDb();
    const {id } = req.params;
    let myquery = { _id: ObjectId(id) };
    db_connect
    .collection("records")
    .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
    });

}

const addRecord = (req,res) => {
    let db_connect = dbo.getDb();
    const {name, position,level} = req.body;
    let myobj = {name,position,level};
    db_connect.collection("records").insertOne(myobj, function (err, response) {
        if (err) throw err;
        res.json(response);
    });

}

const updateRecord = (req,res) => {
    let db_connect = dbo.getDb();
    const {name, position,level} = req.body;
    let myquery = { _id: ObjectId(req.params.id) };
    let newValues = {
    $set: {
        name: name,
        position: position,
        level: level,
    },
    };
    db_connect
    .collection("records")
    .updateOne(myquery, newValues, (error, response) => {
        if (error) throw error.message;
        console.log("1 document updated");
        res.json(response);
    });

}

const deleteRecord = (req,res) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("records").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        res.json(obj);
    });

}

module.exports = {getRecord,getRecordById,addRecord,updateRecord,deleteRecord}