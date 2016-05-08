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

router.post('/', function (req, res, next) {
  console.log('habit line20: ', req.body);
  var b = req.body;

  habitList.addHabit(b.habit, b.description, b.interval, b.period, b.parent_habit_id, b.category_id, b.public, b.cost)
    .then(function () {
      res.status(200).json({
        status: 'success'
      })
    })
})

module.exports = router;