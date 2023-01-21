const jwt = require('jsonwebtoken');
const User = require('../model/ClientUser');
const protection = async (req, res, next) => {
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
};
module.exports = {
  isLoggedIn: (req, res, next) => {
    console.log("is logged in", req.user)
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash('error_message', 'Please log in to access the requested page');
    res.redirect('/auth/login');


  },
  isLoggedOut: (req, res, next) => {
    if (!req.isAuthenticated()) {
      return next()
    }
    res.redirect('/room')
  },
  protection,
}
