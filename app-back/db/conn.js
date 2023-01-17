require('dotenv').config({ path: './config.env' });
const mongoose = require('mongoose');
const Db = process.env.ATLAS_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(Db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to DB.');
  } catch(e) {
    console.log("Failed to connect to database!");
    console.log(e);
  }
};

module.exports = connectDB;
