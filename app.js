
/**
 * Module dependencies.
 */

var express = require('express')
  , archive = require('./routes/archive')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.cookieParser());
app.use(express.session({ secret: 'something'}));
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());

app.use(function(req, res, next){
    res.locals.error_flash = req.session.error_flash;
    req.session.error_flash = false;
    res.locals.success_flash = req.session.success_flash;
    req.session.success_flash = false;
    next();
});

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// app.get('/issues', archive.list);
app.get('/:campaignId', archive.view);
app.get('/', archive.view_latest)


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
