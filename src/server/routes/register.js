var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const saltRounds = 10;

var user = require('../../../db/userQueries');

// router.get('/', function (req, res, next) {
//   user.getAllHabits()
//     .then(function (results){
//       res.status(200).json({
//         status: 'success',
//         data: results
//       });
//     })
//     .catch(function (err) {
//       return next(err);
//     })
// });

// router.get('/:id', function (req, res, next) {
//   console.log('line20: ', req.params.id);
//   user.getSingleHabit(req.params.id)
//     .then(function (result) {
//       res.status(200).json({
//         status: 'success',
//         data: result
//       });
//     })
//     .catch(function (err) {
//       return next(err);
//     });
// });

router.post('/', function (req, res, next) {
  console.log('login line34: ', req.body);
  var email  = req.body.email;
  var pword = bcrypt.hashSync(req.body.pword, saltRounds);

  user.addUser(email, pword)
    .then(function (id) {
      console.log('new user id: ', id);
      res.status(200).json({
        status: 'success',
        id: id
      })
    })
})

module.exports = router;