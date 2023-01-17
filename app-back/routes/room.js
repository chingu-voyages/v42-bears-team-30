const express = require('express');
const {getRoom} = require('../controller/RoomController')

const router = express.Router();

//room , route : /room

router.get('/',getRoom)

module.exports = router;