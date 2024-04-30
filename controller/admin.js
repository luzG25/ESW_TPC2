const path = require('path');
const rootDir = require('../util/path');
const products = [];

exports.addProducts = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
}

exports.addProducts_post = (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
}

exports.products = (req, res, next) => {
    
}

exports.products = products;