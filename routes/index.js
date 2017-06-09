var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GG.' });
});

router.get('/login' , (req, res, next) => {
  res.json({message:'Hi sir.'});
});
router.get('/users' , (req, res, next) => {
  userArray = [
    { name: 'gum', tel: '01129292', email: 'gum@gmail.com' }
    , { name: 'num', tel: '01238431', email: 'num@gmail.com' }
    , { name: 'hum', tel: '01231234', email: 'hum@gmail.com' }
    , { name: 'sum', tel: '01231231', email: 'sum@gmail.com' }
    , { name: 'aum', tel: '01231232', email: 'aum@gmail.com' }

  ]
  res.json(userArray);
});

module.exports = router;
