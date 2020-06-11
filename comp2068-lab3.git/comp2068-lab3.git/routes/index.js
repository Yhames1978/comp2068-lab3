'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    var name = "The Kaczorowski Family"

    res.render('index', { name: name });
});
router.get('/henry/', function (req, res) {
    var name = "Henry"
    
    res.render('henry', { name: name });
});
router.get('/ursula/', function (req, res) {
    var name = "Ursula"

    res.render('ursula', { name: name });
});
router.get('/stanley/', function (req, res) {
    var name = "Stanley"

    res.render('stanley', { name: name });
});
router.get('/julie/', function (req, res) {
    var name = "Julie"

    res.render('julie', { name: name });
});
router.get('/yolanda/', function (req, res) {
    var name = "Yolanda"

    res.render('yolanda', { name: name });
});
router.get('/mike/', function (req, res) {
    var name = "Mike"

    res.render('mike', { name: name });
});
router.get('/matthew/', function (req, res) {
    var name = "Matthew"

    res.render('matthew', { name: name });
});


module.exports = router;