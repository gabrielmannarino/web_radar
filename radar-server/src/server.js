const port = 8080;

const cors = require('cors');
const bodyParser = require('body-parser')
const app = require('express')();
const sqlite = require('sqlite-sync'); //requiring
const dbfile = __dirname+'/dataset.db';
const http = require('http').Server(app);

const sql = `SELECT co_aviao, latitude, longitude FROM tb_history`
const sqlCaucasus = `SELECT co_aviao, latitude, longitude FROM tb_history WHERE setor = 'caucasus'`
const sqlNormandy = `SELECT co_aviao, latitude, longitude FROM tb_history WHERE setor = 'normandy'`
//const corsOptions = {origin: 'http://localhost:3000'}

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'POST');
    app.use(cors());
    next();
});

app.use(bodyParser.json());

app.get('/', function(req, res) {
  sqlite.connect(dbfile); 
  console.log(sqlite.run(sql))
  res.send(sqlite.run(sql));
  sqlite.close(dbfile);
});


app.post('/', function(req, res) {
  sqlite.connect(dbfile);

  switch(req.body.map) {
    case 'caucasus': res.send(sqlite.run(sqlCaucasus));
        break;
    case 'normandy': res.send(sqlite.run(sqlNormandy));
        break;
    default: res.send(sqlite.run(sql));
}
  sqlite.close(dbfile);
});


http.listen(port, function() {
  console.log('Server up and running at port ' + port);

});
