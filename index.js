// Bootstrap needs
var express = require('express'),
    sIndex = require('serve-index'),
    io = require('socket.io'),
    port = 3550,
    rootPath = __dirname + '/reports';

// Define app as express app
var app = express();

// Define port to listen to
var server = app.listen(port, function() {
  console.log("I'm listening on http://localhost:"+port+"...");
});

// update io
io = io(server);

// Get static files from reports
// Allow navigate throw reports directories
var defaultRouteFunctions = [express.static(rootPath), sIndex(rootPath, {'icons': true})];
app.use('/', defaultRouteFunctions);
