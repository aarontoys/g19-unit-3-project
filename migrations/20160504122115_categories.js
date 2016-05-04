
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function (table) {
    table.increments();
    table.string('category').notNullable().unique();
    table.integer('parent_category_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
