/*  File Name: Assignment 1
    Name: Asheka Hall
    Student Id: 301064568 
    Date: October 6, 2020 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
