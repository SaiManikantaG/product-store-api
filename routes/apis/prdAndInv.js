//var productList = require('../model/products.json');
//var inventoryList = require('../model/inventory.json');
var express = require('express');
var router = express.Router();

var prdAndInv = function(app, prd, invent){
	var inventory = invent;
    var product = JSON.parse(JSON.stringify(prd));
    var inv = JSON.parse(JSON.stringify(inventory));
	router.get('/', function(req, res) {
		var inven = [];

		var result = new Array();
		for (x in product) {
			result.push({
				name: product[x].name,
				price: product[x].price,
			});
			for (y in product) {
				if (inv.inventory[y].name === product[x].name) {
					result[x]['inventory'] = inv.inventory[y].inventory;
				}
			}
		}

		var sent = JSON.stringify(result);
		res.status(200).send(result);
	});
}
module.exports = prdAndInv;