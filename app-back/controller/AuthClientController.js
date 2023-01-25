const ClientUser = require('../model/ClientUser');
require('dotenv').config('../config/config.env');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const { create } = require('connect-mongo');

//const {ObjectId}= require("mongodb");

const getAllUserClient = (req, res) => {
  ClientUser.find({}).select('-password -token ')
    .lean()// to get a json object (instead of a mongoose one)
    .exec((err,data) =>{
      
      if(err) throw new Error(err)
      res.render('userClient', {
        title: 'Client user',
        data: data,
        user: req.user.username,
        email: req.user.email,
      
      });
    })
  
};

//log in user in the client side
const loginUserClient = (req, res) => {
  const { email, password } = req.body;
  try {
    //Match user
    ClientUser.findOne({ email: email }, (err, user) => {
      if (err) res.json({ status: '500', message: err });

      //if user is not found
      if (!user) return res.json({ status: '404', message: 'Incorrect email' ,body: 'email'});
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        //if the password is not match
        if (isMatch === false) return res.json({ status: '404', message: 'Incorrect password',body: 'password' });

        //return into the client side user
        return res.json({
          status: '200',
          user: user.email,
          message: 'login sucessfuly',
          token: createToken(user.id),
        });
      });
    });
  } catch (error) {
    throw new Error(error);
  }
};

const registerUserClient = (req, res) => {
  const { username, email, phoneNumber, password } = req.body;
  const saltRound = 10;
  try {
    ClientUser.findOne({ email: email }, (err, user) => {
      if (err) return res.json({ staus: '500', message: 'An error occured' });
      if (user)
        return res.json({ staus: '400', message: 'Email already existed',body: 'email' });
      bcrypt.genSalt(saltRound, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(password, salt, (errorHash, hash) => {

          if (errorHash) throw errorHash;

          const clientUser = new ClientUser({
            username: username,
            email: email,
            phoneNumber: phoneNumber,
            password: hash,
            token: createToken(this.id),
          });
          clientUser
            .save()
            .then(() => {
              return res.json({
                status: '200',
                message: 'add user successfully',
              });
            })
            .catch((err) => res.json({ status: '500', message: err }));
        });
      });
    });
  } catch (error) {
    return res.json({ status: '500', message: error.message });
  }
};

// Generate JWT token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_KEY, {
    expiresIn: '30d',
  });
}
module.exports = { loginUserClient, registerUserClient, getAllUserClient };
