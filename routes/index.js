var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'gg' });
});

router.get('/login' , (req, res, next) => {
  res.json({message:'Hi sir'});
});

module.exports = router;
