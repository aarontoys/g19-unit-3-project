
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('fname')
    table.string('lname')
    table.string('email').notNullable().unique();
    table.string('pword').notNullable();
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
