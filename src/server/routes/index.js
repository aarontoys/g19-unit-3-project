var express = require('express');
var router = express.Router();
var habitList = require('../../../db/habitListQueries')

router.get('/', function(req, res, next) {
  res.send('hi');
  console.log('how about here???');
  // habitList.getUserHabits()
  //   .then(function (data) {
  //     console.log('data', data);
  //     console.log('hmmm?');
  //     res.sendFile('/index.html');
  //   })
//.
});

module.exports = router;
