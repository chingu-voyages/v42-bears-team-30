const express = require('express');
const {loginUserClient,registerUserClient} = require('../controller/AuthClientController');
const { getRoomApi,getOneRoom,getAllRoomAvailable } = require('../controller/RoomController');
//const { protection } = require('../middleware/auth');

const router = express.Router();

//route localhost:

router.post('/login/client', loginUserClient);
router.post('/register/client', registerUserClient)

//room 

router.get('/room',getRoomApi)
router.get('/room/:id',getOneRoom)
router.get('/rooms',getAllRoomAvailable);

module.exports = router;
