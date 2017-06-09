var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/weaponcall', function(req, res, next) {
  out = [
    {linkImg:'https://vignette2.wikia.nocookie.net/warframe/images/d/da/TennoTonfa.png/revision/latest?cb=20140828170521',name:'Kronen',type:'melee',damage:'65'}
      ,{linkImg:'https://vignette4.wikia.nocookie.net/warframe/images/e/e4/Miter.png/revision/latest/scale-to-width-down/220?cb=20130810114225',name:'Miter',type:'shotgun',damage:'125'}
  ]
  res.json(out);
});

router.post('/addweapon', function(req, res, next) {
  console.log(req);
  console.log('\nSomeone add new weapon NAME :' +req.body.weaponName);
  res.json({assign:2001});
}); 

// router.get('/' , (req, res, next) => {
//   res.render('events', { title: 'gg' });
// });

// router.get('/login' , (req, res, next) => {
//   res.json({message:'Hi sir'});
// });

module.exports = router;
