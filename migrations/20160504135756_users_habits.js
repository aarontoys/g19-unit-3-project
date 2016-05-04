
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_habits', function (table) {
    table.increments();
    table.integer('habit_id').references('habits.id');
    table.integer('user_id').references('users.id');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_habits');
};
