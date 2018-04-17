var express = require('express');
var router = express.Router();
var productx = require('../apis/product');
var inventoryx = require('../apis/inventory');
var productList = require('../datasource/product.json');
var inventoryList = require('../datasource/inventory.json');
//var productList = require('../model/products.json');
//var inventoryList = require('../model/inventory.json');

var product = JSON.parse(JSON.stringify(productList));
var inv = JSON.parse(JSON.stringify(inventoryList));

router.get('/', function(req, res) {
	var inven = [];

	var result = [];
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
	console.log(`sent: ${sent}`);
	res.status(200).send(result);
});

// With parameter

// Product & Inventory API by filter
router.get('/:productName', function(req, res) {
	var productName = req.params.productName;
	//console.log(`productName:${productName}`);
	var lstprd = new Array();
	var lstInv = new Array();
	for (y in inv.inventory) {
		lstInv.push({
			name: inv.inventory[y].name,
			inventory: inv.inventory[y].inventory,
		});
	}
	for (x in product) {
		if (product[x].name === productName) {
			lstprd.push({
				name: product[x].name,
				price: product[x].price,
			});
		}
	}
	lstInv = JSON.parse(JSON.stringify(lstInv));
	//console.log(`lstInv:${JSON.stringify(lstInv)}`);
	for (i in lstInv) {
		var exist = lstInv[i].name === productName ? `yes` : `no`;
		console.log(exist);
		if (exist === `yes`) {
			console.log(lstInv[i].inventory);
			lstprd.push({
				['inventory']: lstInv[i].inventory,
			});
		} else if (exist === `no`) {
			console.log(` I willnot iterate`);
		}
	}
	//console.log(`heya:${JSON.stringify(lstInv)}`);

	var sent = JSON.stringify(lstprd);
	if (lstprd.length > 0) {
		res.status(200).send(lstprd);
	} else {
		//res.status(404).send(`[{error:No Data Found}]`);
		res.render('error', {
			pre: 'No Data Found',
			message: 'Please Verify the data entered',
			error: `{error.stack: No Data Matched with the list}`,
		});
	}
});

module.exports = router;
