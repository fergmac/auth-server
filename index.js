// Main starting point of application

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
//instance of app
const app = express();
const mongoose = require('mongoose');

// DB Setup - creates new database in mongoDB called auth
mongoose.connect('mongodb://localhost:auth/auth');



// App Setup - express working the way we want it to
// middleware in express 
app.use(morgan('combined')); // used for debugging
app.use(bodyParser.json({ type: '*/*'})); //anything coming in will be parsed with json
router(app);



// Server Setup - express application talks to outside world
// set up default port
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on:', port);