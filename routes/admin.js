const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

const adminController = require('../controller/admin')

// /admin/add-product => GET
router.get('/add-product', adminController.addProducts)

// /admin/add-product => POST
router.post('/add-product', adminController.addProducts_post)

// /admin/products 
router.get('/products', adminController.products)



exports.routes = router;
exports.products = products;

