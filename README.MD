
# Product Store

A NodeJs Express application that servers product store APIs for the customer, contains multiple APIs such as Product, Inventory, ProductList (Can be filtered by Product)

## Getting Started

The App is built using Express JS application generator using

```
npm install express-generator -g
express --view=pug myapp
```
and the directory structure is
```
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
|------|____apis
|   |         |___ product.js
|   |         |___ inventory.js
|   |         |___ productList.js
|   |   |___Datasource      
|   |         |___ product.json
|   |         |___ inventory.json
│   ├── index.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug
```
### Installing
To run the app just intall the required dependencies and and hit npm start i.e.


---> Go to the project directory and
```
npm install
npm start
```

### API sources and information

The APP is to give an idea about how to generate & call GET APIs using nodejs and express. I've initially called a GET API to get the data and create three GET APIs, two reflects the same called API and other aggregated list of called API that is generated from the above two APIs. We can pass in a filter that filters the product list from the available all the list of products.
 |
 |__ APIS : /product
            /inventory
            /productList

Data obtained for each of the APIs is as follows for example:

### /products:
```
[
    {
      "name": "shirt",
      "price": 15
    },
    ....
```

### /inventory
```
{
    "inventory": [
      {
        "name": "shirt",
        "inventory": 12
      },
    ....
```
### /productList
And repeat

```
[
    {
      "name": "shirt",
      "price": 15,
      "inventory": 12
    },
```
additional parameter can be passed into url to filter the list as:
/product/shirt i.e. /product/:productName

The application also handles the errors nicely and displays it to user as a HTML clearly and was built using pub framework 

when a filter was provided and the list doesn't contain the product then a HTML response is generated as follows:

```
## Please Verify the data entered
## {error.stack: No Data Matched with the list}
```

other errors with related to code are also thrown in the same way.

The application api call without defining the API i.e. just using a GET '/' will return a HTML response as below

```
## Product Store
### Welcome to Product Store
```

The data