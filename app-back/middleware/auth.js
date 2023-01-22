const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../model/ClientUser');


const protection = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_KEY);

      req.user = await User.findById(decoded.id).select('-password');

      return next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not authorized');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

const isLoggedIn = (req, res, next) => {
    console.log("is logged in", req.user)
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash('error_message', 'Please log in to access the requested page');
    res.redirect('/auth/login');


  }

  const isLoggedOut = (req, res, next) => {
    if (!req.isAuthenticated()) {
      return next()
    }
    res.redirect('/room')
  }

module.exports = {
  isLoggedIn,
  isLoggedOut,
  protection,
}
