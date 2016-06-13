// var declaration
var express,
  sIndex,
  io,
  port,
  rootPath,
  app,
  server,
  defaultRouteFunctions;

// set var values
express = require('express');
sIndex = require('serve-index');
io = require('socket.io');
port = 3550;
rootPath = __dirname + '/reports';
app = express();
io = io(server);

// Define port to listen to
server = app.listen(port, function () {
  console.log('I\'m listening on http://localhost:' + port + '...');
});

// Get static files from reports
// Allow navigate throw reports directories
defaultRouteFunctions = [express.static(rootPath), sIndex(rootPath, {'icons': true})];
app.use('/', defaultRouteFunctions);
