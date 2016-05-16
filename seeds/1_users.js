
exports.seed = function(knex, Promise) {
  var bcrypt = require('bcrypt');
  const saltRounds = 10;

  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(), 

    // Inserts seed entries
    knex('users').insert({
      // id: 1, 
      fname: 'Aaron',
      lname: 'Toys',
      email: 'aarontoys@gmail.com',
      pword: bcrypt.hashSync('pass', saltRounds)
    }),
    knex('users').insert({
      // id: 2, 
      fname: 'Nicki',
      lname: 'Toys',
      email: 'nickistruck@yahoo.com',
      pword: bcrypt.hashSync('pass', saltRounds)
    }),
    knex('users').insert({
      // id: 3, 
      fname: 'Michael',
      lname: 'Sunshine',
      email: 'mikeysunshine@gmail.com',
      pword: bcrypt.hashSync('pass', saltRounds)
    })
  );
};
