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

// Get static files from reports
app.use(express.static(__dirname + '/reports'));

// Allow navigate throw reports directories
app.use('/', sIndex(__dirname + '/reports'));

// Define port to listen to
app.listen(3550, function() {
  console.log("I'm listening on "+port+"...");
});
