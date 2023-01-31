const express = require('express');
const {getRoom,addRoom} = require('../controller/RoomController')
const {isLoggedIn} = require('../middleware/auth')
const router = express.Router();
const uploadsImage = require('../middleware/uploadImageRoom');
//room , route : /room
 
router.get('/',isLoggedIn,getRoom);
router.post('/',isLoggedIn,uploadsImage.array('images',3),addRoom);



module.exports = router;
