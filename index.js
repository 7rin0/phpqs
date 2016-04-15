// Bootstrap needs
var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser'),
    mysql = require('mysql'),
    ejs = require('ejs'),
    sIndex = require('serve-index'),
    port = 3550;

// Define app as express app
var app = express();

app.use('/', sIndex(__dirname + '/reports'));

// Reports root
// app.get('/', function rootMiddleware(req, res, next) {
//   // res.send('Hello World!');
//   express.bodyParser();
// });

// Define port to listen to
app.listen(3550, function() {
  console.log("I'm listening on "+port+"...");
});
