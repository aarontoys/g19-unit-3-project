
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('habits').del(), 

    // Inserts seed entries
    knex('habits').insert({
      // id: 1, 
      habit: 'Shema',
      description: 'Say the Shema and before and after brochos twice daily at the propper time',
      interval: 2,
      period: 'daily',
      parent_habit_id: 0,
      category_id: 1,
      public: true,
      cost: 1.00
    }),
    knex('habits').insert({
      // id: 2, 
      habit: 'Shema Minimum',
      description: 'Say just the first pasuk twice daily at the propper time',
      interval: 2,
      period: 'daily',
      parent_habit_id: 1,
      category_id: 1,
      public: true,
      cost: 1.00
    }),
    knex('habits').insert({
      // id: 3, 
      habit: 'Full Shema without brochos',
      description: 'Say the full Shema twice daily at the propper time',
      interval: 2,
      period: 'daily',
      parent_habit_id: 1,
      category_id: 1,
      public: true,
      cost: 1.00
    })
  );
};
