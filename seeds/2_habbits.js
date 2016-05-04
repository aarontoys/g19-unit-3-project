
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('habbits').del(), 

    // Inserts seed entries
    knex('habbits').insert({
      id: 1, 
      habbit: 'Shema',
      description: 'Say the Shema and before and after brochos twice daily at the propper time',
      interval: 2,
      period: 'daily',
      parent_habbit_id: 0,
      category_id: 1
    }),
    knex('habbits').insert({
      id: 2, 
      habbit: 'Shema Minimum',
      description: 'Say just the first pasuk twice daily at the propper time',
      interval: 2,
      period: 'daily',
      parent_habbit_id: 1,
      category_id: 1
    }),
    knex('habbits').insert({
      id: 3, 
      habbit: 'Full Shema without brochos',
      description: 'Say the full Shema twice daily at the propper time',
      interval: 2,
      period: 'daily',
      parent_habbit_id: 1,
      category_id: 1
    })
  );
};
