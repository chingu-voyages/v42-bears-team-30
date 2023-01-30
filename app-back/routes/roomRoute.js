const express = require('express');
const {getRoom,addRoom,goToFormRoom,deleteRoom} = require('../controller/RoomController')
const {isLoggedIn} = require('../middleware/auth')
const router = express.Router();
const {roomCheck} = require('../middleware/formvalidation');
const uploadsImage = require('../middleware/uploadImageRoom');
//room , route : /room
 
router.get('/',isLoggedIn,getRoom);
router.post('/add',isLoggedIn,uploadsImage.array('images',3),roomCheck(),addRoom);
router.get('/add',isLoggedIn,goToFormRoom);
router.get('/delete/:id',isLoggedIn,deleteRoom);


module.exports = router;