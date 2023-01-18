const express = require('express');
const clientController = require('../controller/UserController');

const router = express.Router();

router.post('/signup', clientController.signUp);

module.exports = router;
