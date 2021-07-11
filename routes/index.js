/*  File Name: Assignment 1
    Name: Asheka Hall
    Student Id: 301064568 
    Date: October 6, 2020 */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Catch That Pokemon!'});

});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});

});





module.exports = router;
