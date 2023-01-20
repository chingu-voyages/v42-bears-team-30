const express = require('express');
const {loginUserClient,registerUserClient} = require('../controller/AuthClientController');

const router = express.Router();

//route localhost:

router.post('/login/client',loginUserClient);
router.post('/register/client',registerUserClient)

module.exports = router;