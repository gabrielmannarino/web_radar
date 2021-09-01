const sqlite3 = require('sqlite3').verbose();

var methods = {};


methods.query_database = function(db_output) {

    let db = new sqlite3.Database(__dirname+'/dataset.db', sqlite3.OPEN_READWRITE, (err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Connected to the database.');
    });
    
    db.serialize(() => {
      db.each(`SELECT co_aviao, latitude, longitude
                FROM tb_history`, (err, row) => {
        if (err) {
          console.error(err.message);
        }
        db_output.push(row);
      });
    });

    db.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Close the database connection.');
    });
}

exports.data = methods;
