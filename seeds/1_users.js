
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(), 

    // Inserts seed entries
    knex('users').insert({
      id: 1, 
      fname: 'Aaron',
      lname: 'Toys',
      email: 'aarontoys@gmail.com',
      pword: 'pass'
    }),
    knex('users').insert({
      id: 2, 
      fname: 'Nicki',
      lname: 'Toys',
      email: 'nickistruck@yahoo.com',
      pword: 'pass'
    }),
    knex('users').insert({
      id: 3, 
      fname: 'Michael',
      lname: 'Sunshine',
      email: 'mikeysunshine@gmail.com',
      pword: 'pass'
    })
  );
};
