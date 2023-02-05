const {saveBooking}  = require('../controller/BookingController')

const router = require('express').Router();


// post api/book
router.post('/',saveBooking);

module.exports =router;