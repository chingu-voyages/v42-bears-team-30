const express = require("express");
const authClientRoute = require('./routes/authClient');
const roomRoute = require('./routes/room')
const authAdmin = require('./routes/authAdmin')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const morgan = require('morgan')
const cors = require("cors");
const {engine} = require('express-handlebars');
const session = require('express-session')


//load config
require("dotenv").config({ path: "./config/config.env" });

const app = express();

//log request
if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

const port = process.env.PORT || 3000;
connectDB()
app.use(cors());

//parse request to body-parser
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//style (the css and js that we use)
app.use(express.static(__dirname + '/public'));
//handlebars config
app.engine('.hbs', engine({defaultLayout : 'main',extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

//session 
app.use(session({
  secret: process.env.SECRET_SESSION,
  resave: false,
  saveUninitialized: true
}))

//the route
app.use('/auth',authAdmin)
app.use('/room',roomRoute);

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port:  ${port}`);
});