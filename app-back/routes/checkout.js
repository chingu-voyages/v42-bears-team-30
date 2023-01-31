const express = require('express');
const createCheckoutSession = require('../controller/CheckoutController')
const router = express.Router();

router.post('/session', createCheckoutSession)

module.exports = router;
