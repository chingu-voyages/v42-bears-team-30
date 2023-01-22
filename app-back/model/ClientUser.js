const mongoose = require('mongoose');

const UserClientSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phoneNumber: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  token: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserClientSchema.virtual('id').get(function () {
  return this._id.toString();
});


module.exports = mongoose.model('ClientUser', UserClientSchema);
