const express = require('express');
const {loginUserClient,registerUserClient} = require('../controller/AuthClientController');
const { protection } = require('../middleware/auth');

const router = express.Router();

//route localhost:

router.post('/login/client', protection, loginUserClient);
router.post('/register/client', protection, registerUserClient)

module.exports = router;
