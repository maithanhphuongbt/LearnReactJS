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



//api get data from postgres

router.get('/getdata01', function(req, res, next) {

  pool.query('SELECT * FROM product_info', (err, response) => {
    if(err) {
      console.log(err);
    }else {
      console.log(response.rows)
      res.send(response.rows)
    }
  })
});

/* add data to postgres. */
router.get('/add', function(req, res, next) {
  res.render('add',{})
});

/* add data to postgres. */
router.post('/add', function(req, res, next) {
  var product_name = req.body.product_name
  var product_price = req.body.product_price
  var product_image = req.body.product_image
  pool.query("INSERT INTO product_info (product_name,product_price,image) VALUES ($1,$2,$3)",[product_name,product_price,product_image],(err,response) => {
    if (err) {
      res.send(err)
    }else {
      res.send('Insert data success' + product_name + "/" + product_price +"/"+ product_image)
    }
  })
});


module.exports = router;
