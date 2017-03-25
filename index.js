// Main starting point of application

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const mogran = require('morgan');

//instance of app
const app = express();

// App Setup - express working the way we want it to



// Server Setup - express application talks to outside world
// set up default port
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on:', port);