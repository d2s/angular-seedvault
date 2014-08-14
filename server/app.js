var express = require('express');
var app = express();

app.get('/hello.txt', function(req, res){
  res.send('Hello World ');
});

app.get('/hello.txt', function(req, res){
  res.send('Hello World ');
});

app.get('/', function(req,res) {
  res.sendfile('dist/index.html');
});
app.get('/app.css', function(req,res) {
  res.sendfile('dist/app.css');
});
app.get('/vendor.js', function(req,res) {
  res.sendfile('dist/vendor.js');
});
app.get('/app.js', function(req,res) {
  res.sendfile('dist/app.js');
});
var port = process.env.PORT || 4000;

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
