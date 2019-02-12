var express = require('express');
var router = express.Router();

// node-postgres

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'beleaf',
  password: 'vull8062365@',
  port: 5432,
})

//api get data from postgres

router.get('/getbeleaf', function(req, res, next) {

  pool.query('SELECT * FROM content', (err, response) => {
    if(err) {
      console.log(err);
    }else {
      console.log(response.rows)
      res.send(response.rows)
    }
  })
});

module.exports = router;
