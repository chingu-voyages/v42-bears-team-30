const express = require("express");
const authClientRoute = require('./routes/authClient');
const roomRoute = require('./routes/room')
const authAdmin = require('./routes/authAdmin')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const morgan = require('morgan')
const cors = require("cors");
const {engine} = require('express-handlebars');


//load config
require("dotenv").config({ path: "./config/config.env" });

const app = express();

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

const port = process.env.PORT || 3000;
connectDB()
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(__dirname + '/public'));
//handlebars config
app.engine('.hbs', engine({defaultLayout : 'main',extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use('/auth',authAdmin)
app.use('/room',roomRoute);

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port:  ${port}`);
});