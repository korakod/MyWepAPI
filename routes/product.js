var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* GET product list  listing. */
router.get('/product-list', function (req, res, next) {
    product = [{ subject: 'Hello', detail: 'World' },{ subject: 'GGG.wwwwwwww', detail: 'WPPP' }];
    res.json(product);
});

router.post('/addProduct', function (req, res, next) {
  let subject = req.body.subject;
  let detail = req.body.detail;

  console.log('Subject: ' + subject + ' Detail: ' + detail);
  res.json({ signin: 1 });
});

module.exports = router;
