const express = require('express');
const createCheckoutSession = require('../controller/CheckoutController')
const router = express.Router();


// the route is /create-checkout-session
router.post('/', createCheckoutSession)

module.exports = router;
