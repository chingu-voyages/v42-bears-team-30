const express = require('express');
const {Login,Register,logUser,registerUser,logoutUser} = require('../controller/AuthAdminController')
const {registerCheck}= require('../middleware/formvalidation')
// const passport =require('passport')
const {isLoggedOut} = require('../middleware/auth')
const router = express.Router();

//login, route : /auth/login

router.get('/login',isLoggedOut,Login)
router.get('/register',Register)
router.post('/register',registerCheck(),registerUser)
router.post('/login', logUser)
router.get('/logout',logoutUser);


module.exports = router;