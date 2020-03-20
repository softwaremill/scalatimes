
/**
 * Module dependencies.
 */

var express = require('express')
  , archive = require('./routes/archive')
  , events = require('./routes/events')
  , banners = require('./routes/banners')
  , http = require('http')
  , path = require('path')
  , favicon = require('serve-favicon')
  , cookieParser = require('cookie-parser')
  , session = require('express-session')
  , morgan = require('morgan')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override')
  , errorHandler = require('errorhandler');

var app = express();

// all environments
app.use(favicon(path.join(__dirname, 'public', 'images/favicon.ico')));
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(cookieParser());
app.use(session({ secret: 'something'}));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride());

app.use(function(req, res, next){
    res.locals.error_flash = req.session.error_flash;
    req.session.error_flash = false;
    res.locals.success_flash = req.session.success_flash;
    req.session.success_flash = false;
    next();
});

//app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(errorHandler());
}

// app.get('/issues', archive.list);
app.get('/events', events.view);
app.get('/banners', banners.view);
app.get('/search', archive.search);
app.get('/:campaignId', archive.view);
app.get('/', archive.view_latest);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
