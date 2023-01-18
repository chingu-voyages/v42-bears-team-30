const express = require('express');
const {Login,Register,logUser,registerUser} = require('../controller/AuthAdminController')

const router = express.Router();

//login, route : /auth/login

router.get('/login',Login)
router.get('/register',Register)
router.post('/register',registerUser)

module.exports = router;