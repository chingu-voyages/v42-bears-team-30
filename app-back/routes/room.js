const express = require('express');
const {getRoom} = require('../controller/RoomController')
const {isLoggedIn} = require('../middleware/auth')
const router = express.Router();

//room , route : /room

router.get('/',isLoggedIn,getRoom);

module.exports = router;