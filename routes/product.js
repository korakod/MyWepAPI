var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/* GET product list  listing. */
router.get('/product-list', function (req, res, next) {
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


    var myJsonString = JSON.stringify(product);
    console.log("Response :" + myJsonString);
    res.json(product);


});

router.get('/v1/partner/partnerProfile/vatAddress.json?filter=((lastUpd_key>=:Lasttime)(lastUpd_key1<=:currenttime))', function (req, res, next) {

    ///v1/partner/partnerProfile/vatAddress.json?filter=(&($lastUpd_key>=$date&time)($lastUpd_key<=$date&time)(dataType=$value))
    // product = {
    //     "resultCode": "20000",
    //     "resultDescription": "Success",
    //     "resultData": [
    //         {
    //             "locationCode_key0": "293840",
    //             "ownerLocationCode_data": "",
    //             "companyAbbr_key1": "Entronica",
    //             "vatBranchNo_key2": "สำนักงานใหญ่",
    //             "vatAddress_data": "บริษัท เอนโทรนิก้า จำกัด 31 อาคารพญาไทบิวดิ้ง ชั้นที่ 10 ห้องเลขที่ 107-108 ถนน พญาไท แขวง ถนนพญาไท เขต ราชเทวี กรุงเทพมหานคร 10400",
    //             "created_data": "",
    //             "createdBy_data": "",
    //             "lastUpd_data": "",
    //             "lastUpdBy_data": "",
    //             "modificationNum_data": ""
    //         },{
    //             "locationCode_key0": "293840",
    //             "ownerLocationCode_data": "qq",
    //             "companyAbbr_key1": "Entronica",
    //             "vatBranchNo_key2": "สำนักงานใหญ่",
    //             "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
    //             "created_data": "",
    //             "createdBy_data": "",
    //             "lastUpd_data": "",
    //             "lastUpdBy_data": "",
    //             "modificationNum_data": ""
    //         },{
    //             "locationCode_key0": "293840",
    //             "ownerLocationCode_data": "",
    //             "companyAbbr_key1": "Entronica",
    //             "vatBranchNo_key2": "สำนักงานใหญ่",
    //             "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
    //             "created_data": "",
    //             "createdBy_data": "",
    //             "lastUpd_data": "",
    //             "lastUpdBy_data": "",
    //             "modificationNum_data": ""
    //         },{
    //             "locationCode_key0": "293840",
    //             "ownerLocationCode_data": "",
    //             "companyAbbr_key1": "Entronica",
    //             "vatBranchNo_key2": "สำนักงานใหญ่",
    //             "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
    //             "created_data": "",
    //             "createdBy_data": "",
    //             "lastUpd_data": "",
    //             "lastUpdBy_data": "",
    //             "modificationNum_data": ""
    //         },{
    //             "locationCode_key0": "293840",
    //             "ownerLocationCode_data": "",
    //             "companyAbbr_key1": "Entronica",
    //             "vatBranchNo_key2": "สำนักงานใหญ่",
    //             "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
    //             "created_data": "",
    //             "createdBy_data": "",
    //             "lastUpd_data": "",
    //             "lastUpdBy_data": "",
    //             "modificationNum_data": ""
    //         },{
    //             "locationCode_key0": "293840",
    //             "ownerLocationCode_data": "",
    //             "companyAbbr_key1": "Entronica",
    //             "vatBranchNo_key2": "สำนักงานใหญ่",
    //             "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
    //             "created_data": "",
    //             "createdBy_data": "",
    //             "lastUpd_data": "",
    //             "lastUpdBy_data": "",
    //             "modificationNum_data": ""
    //         },{
    //             "locationCode_key0": "293840",
    //             "ownerLocationCode_data": "",
    //             "companyAbbr_key1": "Entronica",
    //             "vatBranchNo_key2": "สำนักงานใหญ่",
    //             "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
    //             "created_data": "",
    //             "createdBy_data": "",
    //             "lastUpd_data": "",
    //             "lastUpdBy_data": "",
    //             "modificationNum_data": ""
    //         },{
    //             "locationCode_key0": "293840",
    //             "ownerLocationCode_data": "",
    //             "companyAbbr_key1": "Entronica",
    //             "vatBranchNo_key2": "สำนักงานใหญ่",
    //             "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
    //             "created_data": "",
    //             "createdBy_data": "",
    //             "lastUpd_data": "",
    //             "lastUpdBy_data": "",
    //             "modificationNum_data": ""
    //         },{
    //             "locationCode_key0": "293840",
    //             "ownerLocationCode_data": "",
    //             "companyAbbr_key1": "Entronica",
    //             "vatBranchNo_key2": "สำนักงานใหญ่",
    //             "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
    //             "created_data": "",
    //             "createdBy_data": "",
    //             "lastUpd_data": "",
    //             "lastUpdBy_data": "",
    //             "modificationNum_data": ""
    //         },
    //         {
    //             "locationCode_key0": "13215",
    //             "ownerLocationCode_data": "",
    //             "companyAbbr_key1": "AIS",
    //             "vatBranchNo_key2": "สำนักงานใหญ่",
    //             "vatAddress_data": "xxxd ffdsfasdfกกdsfasdfasd ททท  10500   ",
    //             "created_data": "",
    //             "createdBy_data": "",
    //             "lastUpd_data": "",
    //             "lastUpdBy_data": "",
    //             "modificationNum_data": ""
    //         },{
    //             "locationCode_key0": "293840",
    //             "ownerLocationCode_data": "",
    //             "companyAbbr_key1": "Entronica",
    //             "vatBranchNo_key2": "สำนักงานใหญ่",
    //             "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
    //             "created_data": "",
    //             "createdBy_data": "",
    //             "lastUpd_data": "",
    //             "lastUpdBy_data": "",
    //             "modificationNum_data": ""
    //         },
    //         {
    //             "locationCode_key0": "13215",
    //             "ownerLocationCode_data": "",
    //             "companyAbbr_key1": "AIS",
    //             "vatBranchNo_key2": "สำนักงานใหญ่",
    //             "vatAddress_data": "xxxd ffdsfasdfกกdsfasdfasd ททท  10500   ",
    //             "created_data": "",
    //             "createdBy_data": "",
    //             "lastUpd_data": "",
    //             "lastUpdBy_data": "",
    //             "modificationNum_data": ""
    //         },{
    //             "locationCode_key0": "293840",
    //             "ownerLocationCode_data": "",
    //             "companyAbbr_key1": "Entronica",
    //             "vatBranchNo_key2": "สำนักงานใหญ่",
    //             "vatAddress_data": "กก สสหป 6666 111 3กด สสส กกกกกก 10400     ",
    //             "created_data": "",
    //             "createdBy_data": "",
    //             "lastUpd_data": "",
    //             "lastUpdBy_data": "",
    //             "modificationNum_data": ""
    //         },
    //         {
    //             "locationCode_key0": "13215",
    //             "ownerLocationCode_data": "",
    //             "companyAbbr_key1": "AIS",
    //             "vatBranchNo_key2": "สำนักงานใหญ่",
    //             "vatAddress_data": "xxxd ffdsfasdfกกdsfasdfasd ททท  10500   ",
    //             "created_data": "",
    //             "createdBy_data": "",
    //             "lastUpd_data": "",
    //             "lastUpdBy_data": "",
    //             "modificationNum_data": ""
    //         }
    //     ]
    // };


    // var myJsonString = JSON.stringify({lastUpd_key:'',lastUpd_key1:''});
    var myJsonString = JSON.stringify(req.param);
    console.log("Response :" + myJsonString);
    res.json(product);


});

router.post('/addProduct', function (req, res, next) {
    let subject = req.body.subject;
    let detail = req.body.detail;

    console.log('Subject: ' + subject + ' Detail: ' + detail);
    res.json({ signin: 1 });
});

module.exports = router;
