
exports.up = function(knex, Promise) {
  return knex.schema.createTable('habits', function (table) {
    table.increments();
    table.string('habit').notNullable();
    table.string('description');
    table.integer('interval');
    table.string('period');
    table.integer('parent_habit_id');
    table.integer('category_id').references('categories.id').onDelete('cascade');
    // table.integer('user_id').references('users.id').onDelete('cascade');
    table.boolean('public');
    table.decimal('cost');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('habits');
};
