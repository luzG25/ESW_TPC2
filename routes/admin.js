const express = require('express');

const router = express.Router();

const adminController = require('../controller/admin')

// /admin/add-product => GET
router.get('/add-product', adminController.addProducts)

// /admin/add-product => POST
router.post('/add-product', adminController.addProducts_post)

// /admin/products 
router.get('/products', adminController.products_get)

// /admin/product_deletar
router.post('/product_deletar', adminController.product_delete)


exports.routes = router;

