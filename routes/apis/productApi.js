var request = require('request');
var express = require('express');
var router = express.Router();

var productApi = function(app, resp) {
  
    router.get('/products', function(req, res, body) {
        console.log(`Products::${JSON.stringify(resp)}`);
        res.status(200).send(resp);
    });
};

var inventoryApi = function(app, results){
	router.get('/inventory', function(req, res, body) {
        console.log(`inventory:${JSON.stringify(results)}`);
		res.status(200).send(results);
    });
}

module.exports.inventoryApi = inventoryApi;
module.exports.productApi = productApi;
module.exports = productApi;