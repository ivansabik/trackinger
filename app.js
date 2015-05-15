var express = require('express');
var shortid = require('shortid');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('port', process.env.port || 3000);

app.get('/', function (req, res) {
  res.send('Route url: ' + shortid.generate());
});

app.listen(app.get('port'), function() {
  console.log('Express njs here!');
});
