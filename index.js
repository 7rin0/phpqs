// app.js
var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser'),
    mysql = require('mysql'),
    ejs = require('ejs');

var app = express();

app.use('/', express.static(__dirname + '/reports'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/images',express.directory(__dirname + '/public/images'));
