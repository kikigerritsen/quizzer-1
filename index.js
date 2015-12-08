var express = require('express');

var app = express();
var server = require('http').createServer(app);
app.get('/', function(req, res){
  res.send('200 ok');
});

server.listen(9000);
