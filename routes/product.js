var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* GET product list  listing. */
router.get('/product-list', function (req, res, next) {
    product = [{ subject: 'Hello', detail: 'World' }];
    res.json(product);
});

module.exports = router;
