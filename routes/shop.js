const path = require('path');

const express = require('express');

const router = express.Router();

const shopController = require('../controller/shop')

router.get('/', shopController.index)

router.get('/produtos', shopController.products)

router.get('/cart', shopController.cart)

router.get('/orders', shopController.orders)

module.exports = router;
