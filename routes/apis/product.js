var express = require('express');
var router = express.Router();
var productList = require('../datasource/product.json');
//console.log(`product list is ${JSON.stringify(productList)}`);
/* GET product listing. */
router.get('/', function(req, res, body) {
  res.status(200).send(productList);
});
module.exports = router;