var express = require('express');
var router = express.Router();

// node-postgres

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham',
  password: 'vull8062365@',
  port: 5432,
})

/* GET home page. */
router.get('/', function(req, res, next) {
  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })
  res.render('index', { title: 'Express' });
});

//api get data from postgres

router.get('/getdata01', function(req, res, next) {
  console.log('day la api lay du lieu cho react js');
  pool.query('SELECT * FROM product_info', (err, res) => {
    if(err) {
      console.log(err);
    }else {
      console.log(res.rows)
    }
    pool.end()
  })
  res.render('index', { title: 'Express' });
});


module.exports = router;
