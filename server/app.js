var _  = require('underscore');
   http = require('http'),
   express = require('express'),
   path = require('path'),
   favicon = require('serve-favicon'),
   logger = require('morgan'),
   cookieParser = require('cookie-parser'),
   bodyParser = require('body-parser'),
   basicAuth = require('basic-auth-connect');

//var routes = require('./routes/index');
//var users = require('./routes/users');

var BASIC_AUTH_ENVS = ['production'];
var DEVELOPMENT_ENVS = ['development', undefined];
var app = express();
var port = Number(process.env.PORT || 3000)
console.log(port);

var errorHandler = function(err, req, res, next) {
    if(!err) return next();
    console.log("error!!!", err);
    res.send("error!!!");
}
// view engine setup
app.set('views', path.join(__dirname, 'dist'));
app.set('view engine', 'jade');
app.use(favicon());
app.set('port', port);

// Authentication on heroku
// if(_.contains(BASIC_AUTH_ENVS, process.env.NODE_ENV)) {
//     app.use(basicAuth('user', 'pass'));
// }

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist')));
app.use(logger('tiny'));
//app.use(errorHandler);

app.listen(port, function () {
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
