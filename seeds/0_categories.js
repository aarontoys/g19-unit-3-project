
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('categories').del(), 

    // Inserts seed entries
    knex('categories').insert({
      id: 1, 
      category: 'Mitzvot',
      parent_category_id: 0
    }),
    knex('categories').insert({
      id: 2, 
      category: 'Positive',
      parent_category_id: 1
    }),
    knex('categories').insert({
      id: 3, 
      category: 'Negative',
      parent_category_id: 1
    }),
    knex('categories').insert({
      id: 4,
      category: 'Productivity',
      parent_category_id: 0,
    })

  );
};
