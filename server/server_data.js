const port = 8080;
var express = require('express');
var dataset = require('./get_dataset.js');

var server = express();
var db_output = []



dataset.data.query_database(db_output);

server.get('/', function(req, res) {
  res.send(db_output);
});

server.listen(port, function() {
  console.log('Server up and running at port ' + port);
});

