const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const path = require('path');
const products = [];


router.get('/add-products', (req, res, next)=> {
    res.sendFile(path.join(rootDir,'views','add-product.html'))
})



router.post('/add-products', (req, res, next) => {
    products.push({title: req.body.title, price: req.body.title1});
res.redirect('/');

})

exports.routes = router;
exports.products = products;

