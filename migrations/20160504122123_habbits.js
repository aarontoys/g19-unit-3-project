
exports.up = function(knex, Promise) {
  return knex.schema.createTable('habbits', function (table) {
    table.increments();
    table.string('habbit').notNullable();
    table.string('description');
    table.integer('interval');
    table.string('period');
    table.integer('parent_habbit_id');
    table.integer('category_id').references('categories.id').onDelete('cascade');
    table.integer('user_id').references('users.id').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('habbits');
};
