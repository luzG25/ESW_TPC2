const path = require('path');

const express = require('express');

const router = express.Router();

const shopController = require('../controller/shop')

router.get('/', shopController.index)

router.get('/produtos', (req, res, next) => {

})

router.get('/cart', (req, res, next) => {

})

router.get('/orders', (req, res, next) => {

})

module.exports = router;
