var express = require('express');
var fs = require('file-system');
var router = express.Router();
//var productList = require('../datasource/product.json');
var request = require('request');
//console.log(`product list is ${JSON.stringify(productList)}`);
/* GET product listing. */
var products = function() {
	var url = 'http://autumn-resonance-1298.getsandbox.com/products';
	request(
		{
			url: url,
			json: true,
		},
		function(error, response, body) {
			//console.log(`hell ya:${JSON.stringify(body)}`)
			if (!error && response.statusCode === 200) {
				var content = JSON.stringify(body);
				var prd = body;
				router.get('/', function(req, res, body) {
					console.log(`product list obtained: ${JSON.stringify(prd)}`);
					fs.writeFile('../datasource/product.json', content, 'utf8', function(err) {
						if (err) {
							return console.log(err);
						}
					});
					res.status(200).send(prd);
				});
			}
		}
	);
};
products();
module.exports = router;
