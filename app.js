var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('port', process.env.port || 3000);

app.get('/', function (req, res) {
  res.send('Hola trackinger');
});

app.listen(app.get('port'), function() {
  console.log('express here!');
});
