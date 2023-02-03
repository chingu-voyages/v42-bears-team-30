const express = require("express");
const apiRoute = require('./routes/apiRoute')
const roomRoute = require('./routes/roomRoute')
const userClientRoute = require('./routes/userclientRoute')
const authAdmin = require('./routes/authAdminRoute')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const morgan = require('morgan')
const cors = require("cors");
//const {engine} = require('express-handlebars');
var handlebars = require('express-handlebars');
const {engine} = handlebars;
const session = require('express-session');
const passport = require('passport')
const flash = require('connect-flash');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');
const winston = require('winston');

const checkout = require('./routes/checkout');
//load config
require("dotenv").config({ path: "./config/config.env" });

const app = express();

// Passport Config
require('./config/passport')(passport);

//log request
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

const port = process.env.PORT || 3000;
connectDB()

//cors
app.use(cors());

//parse request to body-parser
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 }
}))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

//sass middleware



//style (the css and js that we use)
app.use(express.static(__dirname + '/public'));
//handlebars config 


app.engine('.hbs', engine({defaultLayout : 'main',extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

//force the navigator to reload when user try to browse back using browser button back
app.use(function(req, res, next) {
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
});

//the route
app.use('/auth',authAdmin)
app.use('/room',roomRoute);
app.use('/client',userClientRoute)
app.use('/api',apiRoute);
app.use('/create-checkout-session', checkout);
app.get('/',(req,res) => { 
  res.redirect('/room')
})
app.use('/success', (req, res, next) => {
  res.status(400).send({success: true}).redirect('/');
})

app.use('/error', function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
})
app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port:  ${port}`);
});
