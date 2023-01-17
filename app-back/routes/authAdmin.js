const express = require('express');
const {Login} = require('../controller/AuthAdminController')

const router = express.Router();

//login, route : /auth/login

router.get('/login',Login)

module.exports = router;