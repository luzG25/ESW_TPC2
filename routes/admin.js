const express = require('express');

const router = express.Router();

const adminController = require('../controller/admin')

// /admin/add-product => GET
router.get('/add-product', adminController.addProducts)

// /admin/add-product => POST
router.post('/add-product', adminController.addProducts_post)

// /admin/products 
router.get('/products', adminController.products)



exports.routes = router;

