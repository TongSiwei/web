var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.sendfile('index.html');

});

var server = app.listen(3000, function() {
    console.log('server start at localhost:3000');
});
