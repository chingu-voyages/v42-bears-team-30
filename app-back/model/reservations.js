const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  bookingDate: {
    type: Date,
    default: Date.now(),
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
  },
  numGuests: {
    type: Number,
    default: 1,
  },
  clientId: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Reservation', reservationSchema);
