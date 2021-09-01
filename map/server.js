const port = 8080;
var express = require('express');
const bodyParser = require('body-parser');

var server = express();
server.use(
  express.urlencoded({
    extended: true
  })
)

var map_list='{ "maps": ["caucasus","normandy"] }';


server.get('/', function(req, res) {
  res.send(map_list);
});

server.post('/', function(req, res) {
  if (req.body.location == 'caucasus') {
    var map_data={
      "path": __dirname+'\\images\\caucasus.jpg',
      "lat_min": 30,
      "lat_max": 50,
      "lon_min": 30,
      "lon_max": 50
    };
    res.send(map_data);
  }
  if (req.body.location == 'normandy') {
    var map_data={
      "path": __dirname+'\\images\\normandy.jpg',
      "lat_min": 30,
      "lat_max": 50,
      "lon_min": 30,
      "lon_max": 50
    };
    res.send(map_data);
  }

});

server.listen(port, function() {
  console.log('Server up and running at port ' + port);
});

