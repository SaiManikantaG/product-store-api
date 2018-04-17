var express = require('express');
var router = express.Router();
var inventoryList = require('../datasource/inventory.json');
var request = require('request');

var inventory = function() {
	var url = 'http://autumn-resonance-1298.getsandbox.com/inventory';
	request(
		{
			url: url,
			json: true,
		},
		function(error, response, body) {
			if (!error && response.statusCode === 200) {
				//	productApi.inventoryApi(app, body);
				var invent = body;
				var content = JSON.stringify(body);
				/* GET inventory listing. */
				router.get('/', function(req, res, body) {
					console.log(`inventory list obtained: ${JSON.stringify(invent)}`);
					fs.writeFile('../datasource/inventory.json', content, 'utf8', function(err) {
						if (err) {
							return console.log(err);
						}
					});
					res.status(200).send(invent);
				});
			}
		}
	);
};

inventory();
module.exports = inventory;
module.exports = router;
