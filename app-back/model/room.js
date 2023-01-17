const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  maxNumGuests: {
    type: Number,
    required: true,
  },
  roomNum: {
    type: Number,
    required: true,
  },
  roomDesc: {
    type: String,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
});
