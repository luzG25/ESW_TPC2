const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

exports.index = (rep, res, next) => {
    const produtos = adminData.products;
    res.render('shop', {
        prods: produtos,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: produtos.length > 0,
        activeShop: true,
        productCSS: true
    });
}

exports.products = (req, res, next) => {

}

exports.cart = (req, res, next) => {

}

exports.orders = (req, res, next) => {

}
