var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

//app.use(express.static('public'));

//app.set('views', __dirname + '/views'); 
//app.set('view engine', 'pug');

app.get('/', function(request, response) {
  response.render('index', { title: 'Hey', message: 'Hello there!'});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
