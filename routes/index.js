var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GG.' });
});

router.get('/login' , (req, res, next) => {
  res.json({message:'Hi sir.'});
});
router.post('/users/login' , (req, res, next) => {
  
  let userName = req.body.userName;
  let passWord = req.body.passWord;

  console.log( 'User name: ' + userName + ' PWD: ' + passWord );
  res.json({signin:1});
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
router.get('/v1/partner/partnerProfile/vatAddress.json?', function (req, res, next) {

    // /v1/partner/partnerProfile/vatAddress.json?filter=(&($lastUpd_key>=$date&time)($lastUpd_key<=$date&time)(dataType=$value))
    console.log(req.query);
    product = {
        "resultCode": "20000",
        "resultDescription": "Success",
        "resultData": [
            {
                "locationCode_key0": "293840",
                "ownerLocationCode_data": "",
                "companyAbbr_key1": "Entronica",
                "vatBranchNo_key2": "สำนักงานใหญ่",
                "vatAddress_data": "บริษัท เอนโทรนิก้า จำกัด 31 อาคารพญาไทบิวดิ้ง ชั้นที่ 10 ห้องเลขที่ 107-108 ถนน พญาไท แขวง ถนนพญาไท เขต ราชเทวี กรุงเทพมหานคร 10400",
                "created_data": "",
                "createdBy_data": "",
                "lastUpd_data": "",
                "lastUpdBy_data": "",
                "modificationNum_data": ""
            },{
                "locationCode_key0": "293840",
                "ownerLocationCode_data": "qq",
                "companyAbbr_key1": "Entronica",
                "vatBranchNo_key2": "สำนักงานใหญ่",
                "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
                "created_data": "",
                "createdBy_data": "",
                "lastUpd_data": "",
                "lastUpdBy_data": "",
                "modificationNum_data": ""
            },{
                "locationCode_key0": "293840",
                "ownerLocationCode_data": "",
                "companyAbbr_key1": "Entronica",
                "vatBranchNo_key2": "สำนักงานใหญ่",
                "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
                "created_data": "",
                "createdBy_data": "",
                "lastUpd_data": "",
                "lastUpdBy_data": "",
                "modificationNum_data": ""
            },{
                "locationCode_key0": "293840",
                "ownerLocationCode_data": "",
                "companyAbbr_key1": "Entronica",
                "vatBranchNo_key2": "สำนักงานใหญ่",
                "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
                "created_data": "",
                "createdBy_data": "",
                "lastUpd_data": "",
                "lastUpdBy_data": "",
                "modificationNum_data": ""
            },{
                "locationCode_key0": "293840",
                "ownerLocationCode_data": "",
                "companyAbbr_key1": "Entronica",
                "vatBranchNo_key2": "สำนักงานใหญ่",
                "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
                "created_data": "",
                "createdBy_data": "",
                "lastUpd_data": "",
                "lastUpdBy_data": "",
                "modificationNum_data": ""
            },{
                "locationCode_key0": "293840",
                "ownerLocationCode_data": "",
                "companyAbbr_key1": "Entronica",
                "vatBranchNo_key2": "สำนักงานใหญ่",
                "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
                "created_data": "",
                "createdBy_data": "",
                "lastUpd_data": "",
                "lastUpdBy_data": "",
                "modificationNum_data": ""
            },{
                "locationCode_key0": "293840",
                "ownerLocationCode_data": "",
                "companyAbbr_key1": "Entronica",
                "vatBranchNo_key2": "สำนักงานใหญ่",
                "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
                "created_data": "",
                "createdBy_data": "",
                "lastUpd_data": "",
                "lastUpdBy_data": "",
                "modificationNum_data": ""
            },{
                "locationCode_key0": "293840",
                "ownerLocationCode_data": "",
                "companyAbbr_key1": "Entronica",
                "vatBranchNo_key2": "สำนักงานใหญ่",
                "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
                "created_data": "",
                "createdBy_data": "",
                "lastUpd_data": "",
                "lastUpdBy_data": "",
                "modificationNum_data": ""
            },{
                "locationCode_key0": "293840",
                "ownerLocationCode_data": "",
                "companyAbbr_key1": "Entronica",
                "vatBranchNo_key2": "สำนักงานใหญ่",
                "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
                "created_data": "",
                "createdBy_data": "",
                "lastUpd_data": "",
                "lastUpdBy_data": "",
                "modificationNum_data": ""
            },
            {
                "locationCode_key0": "13215",
                "ownerLocationCode_data": "",
                "companyAbbr_key1": "AIS",
                "vatBranchNo_key2": "สำนักงานใหญ่",
                "vatAddress_data": "xxxd ffdsfasdfกกdsfasdfasd ททท  10500   ",
                "created_data": "",
                "createdBy_data": "",
                "lastUpd_data": "",
                "lastUpdBy_data": "",
                "modificationNum_data": ""
            },{
                "locationCode_key0": "293840",
                "ownerLocationCode_data": "",
                "companyAbbr_key1": "Entronica",
                "vatBranchNo_key2": "สำนักงานใหญ่",
                "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
                "created_data": "",
                "createdBy_data": "",
                "lastUpd_data": "",
                "lastUpdBy_data": "",
                "modificationNum_data": ""
            },
            {
                "locationCode_key0": "13215",
                "ownerLocationCode_data": "",
                "companyAbbr_key1": "AIS",
                "vatBranchNo_key2": "สำนักงานใหญ่",
                "vatAddress_data": "xxxd ffdsfasdfกกdsfasdfasd ททท  10500   ",
                "created_data": "",
                "createdBy_data": "",
                "lastUpd_data": "",
                "lastUpdBy_data": "",
                "modificationNum_data": ""
            },{
                "locationCode_key0": "293840",
                "ownerLocationCode_data": "",
                "companyAbbr_key1": "Entronica",
                "vatBranchNo_key2": "สำนักงานใหญ่",
                "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
                "created_data": "",
                "createdBy_data": "",
                "lastUpd_data": "",
                "lastUpdBy_data": "",
                "modificationNum_data": ""
            },
            {
                "locationCode_key0": "13215",
                "ownerLocationCode_data": "",
                "companyAbbr_key1": "AIS",
                "vatBranchNo_key2": "สำนักงานใหญ่",
                "vatAddress_data": "xxxd ffdsfasdfกกdsfasdfasd ททท  10500   ",
                "created_data": "",
                "createdBy_data": "",
                "lastUpd_data": "",
                "lastUpdBy_data": "",
                "modificationNum_data": ""
            }
        ]
    };
    // var myJsonString = JSON.stringify({lastUpd_key:'',lastUpd_key1:''});
    // var myJsonString = req.query;
    console.log("Response :" + product);
    res.json(product);


});

module.exports = router;
