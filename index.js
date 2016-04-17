// Bootstrap needs
var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser'),
    mysql = require('mysql'),
    ejs = require('ejs'),
    sIndex = require('serve-index'),
    port = 3550,
    rootPath = __dirname + '/reports';

// Define app as express app
var app = express();

// Get static files from reports
// Allow navigate throw reports directories
var defaultRouteFunctions = [express.static(rootPath), sIndex(rootPath)];
app.use('/', defaultRouteFunctions);

// Define port to listen to
app.listen(port, function() {
  console.log("I'm listening on http://localhost:"+port+"...");
});
