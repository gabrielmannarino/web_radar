const port = 9090;
const data_server = 'http://127.0.0.1:8000';
const express = require('express');
const axios = require('axios');

var server = express();

/*const dataset = require('./get_dataset.js');
var db_output = []
dataset.data.query_database(db_output);
server.post('/', function(req, res) {
  res.send(db_output);
  db_output = [];
  dataset.data.query_database(db_output);
});
*/

server.post('/', async function(req, res) {
    try {
        var response = await axios.get(data_server)
        res.send(response.data);
      } catch (error) {
        console.error(error);
      }      
});

server.get('/', function(req, res) {
    res.sendFile(__dirname+'/index.html');
  });

  
server.listen(port, function() {
  console.log('Server up and running at port ' + port);
});

