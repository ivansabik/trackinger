// trackinger - server
// app.js

var express = require('express');
var shortid = require('shortid');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('port', process.env.port || 3000);

app.get('/', function (req, res) {
  res.send('Route url: ' + shortid.generate());
});

// API Endpoints

app.get('/api/routes/new', function (req, res) {
  res.send('');
});

app.get('/api/routes/:routeId', function (req, res) {
  res.send('');
});

app.get('/api/routes/:routeId/track', function (req, res) {
  res.send('');
});

app.get('/api/routes/:routeId/monitor', function (req, res) {
  res.send('');
});

app.get('/api/notify', function (req, res) {
  res.send('');
});

// Misc
app.listen(app.get('port'), function() {
  console.log('Express njs here!');
});
