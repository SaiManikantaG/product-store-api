var express = require('express');
var router = express.Router();
var inventoryList = require('../datasource/inventory.json');

/* GET inventory listing. */
router.get('/', function(req, res, body) {
	res.status(200).send(inventoryList);
});

module.exports = router;
