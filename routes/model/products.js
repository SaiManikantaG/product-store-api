var productApi = require('../apis/productApi.js');
var request = require("request");
var inventoryy = require('../repo/inventory.js');


var products = function(app){
var url = "http://autumn-resonance-1298.getsandbox.com/products"
request({
    url: url,
    json: true
}, function (error, response, body) {

    //console.log(`hell ya:${JSON.stringify(body)}`)
    if (!error && response.statusCode === 200) {

       var content = JSON.stringify(body);
       var prd = body;
       inventoryy(prd);
       productApi.productApi(body);
    }
});
}
module.exports = products;