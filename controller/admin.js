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
    res.redirect('/admin/products')
}

exports.products_get = (req, res, next) => {
    res.render('shopAdmin', {
        prods: products,
        pageTitle: 'ShopAdmin',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
}

exports.product_delete = (req, res, next) => {
    let item = { title: req.body.title }
    let newProducts = []

    for (let item0 of products){
        if (item0 != item)
        newProducts.push(item0)
    }
    products = newProducts
    res.redirect('/admin/products')
}

exports.products = products;