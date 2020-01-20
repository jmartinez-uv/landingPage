var express = require('express');
var path = require('path');

var app = express();
app.use('/bootstrap', express.static(__dirname + "/node_modules/bootstrap/dist/"));
app.use(express.static(__dirname+"/public"));

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});