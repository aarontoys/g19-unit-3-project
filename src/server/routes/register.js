var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const saltRounds = 10;
var moment = require('moment');
var jwt = require('jwt-simple');

var user = require('../../../db/userQueries');
var config = require('../../_config');

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
  console.log('register line40: ', req.body);

  var email  = req.body.email;
  var pword = bcrypt.hashSync(req.body.pword, saltRounds);
  
  //check user(email) does not already exist:
 
  user.findUser(email)
  .then(function(user1){
    if(user.length){
      console.log('register line 49');
      console.log('user', user);
      return res.status(409).json({
        status: 'fail',
        message: 'email already exists'
      }) 
    }
    
    user.addUser(email, pword)
    .then(function (id) {
      var token = generateToken(id);
      res.status(200).json({
        status: 'success',
        id: id
      })
    })
    .catch(function(err) {
      return next(err);
    })
  })
  .catch(function(err) {
    return next(err);
  })

});

//generate a token
function generateToken(id) {
  var payload = {
    exp: moment().add(14,'days').unix(),
    iat: moment().unix(),
    sub: id
  }
  return jwt.encode(payload, config.TOKEN_SECRET);
}

module.exports = router;