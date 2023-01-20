const express = require('express');
const {getAllUserClient} = require('../controller/AuthClientController')
const {isLoggedIn} = require('../middleware/auth')
const router = express.Router();

//room , route : /room

router.get('/',isLoggedIn,getAllUserClient);

module.exports = router;