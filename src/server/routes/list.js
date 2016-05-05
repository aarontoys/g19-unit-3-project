var express = require('express');
var router = express.Router();

var habitList = require('../../../db/habitListQueries')

router.get('/', function (req, res, next) {
  habitList.getAllHabits()
    .then(function (results){
      res.status(200).json({
        status: 'success',
        data: results
      });
    })
    .catch(function (err) {
      return next(err);
    })
});

module.exports = router;