//var productList = require('../model/products.json');
//var inventoryList = require('../model/inventory.json');
var express = require('express');
var router = express.Router();

var prdByFilter = function(app, prd, invent) {

	var inventory = invent;
	var product = JSON.parse(JSON.stringify(prd));
	var inv = JSON.parse(JSON.stringify(inventory));
	// Product & Inventory API by filter
	router.get('/:productName', function(req, res) {
		var productName = req.params.productName;
		console.log(`productName:${productName}`);
		var lstprd = new Array();

		for (x in product) {
			if (product[x].name === productName) {
				lstprd.push({
					name: product[x].name,
					price: product[x].price,
				});
				for (y in product) {
					if (inv.inventory[y].name === productName) {
						console.log(inv.inventory[y].inventory);
						lstprd.push({
							inventory: inv.inventory[y].inventory,
						});
					}
				}
				var sent = JSON.stringify(lstprd);
				res.status(200).send(lstprd);
			}
		}
	});
};
// Product & Inventory API by filter
module.exports = prdByFilter;
