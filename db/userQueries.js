var knex = require('./knex');

var getAllUsers = function () {
  return knex('users');
}

var addUser = function (email, pword) {
  return knex('users').insert({
    email: email,
    pword: pword
  }, 'id')
}

var findUser = function (email) {
  return knex('users').where('email', email);
}

module.exports = {
  getAllUsers: getAllUsers,
  addUser: addUser,
  findUser: findUser
}