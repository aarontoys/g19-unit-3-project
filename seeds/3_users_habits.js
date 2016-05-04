
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users_habits').del(), 

    // Inserts seed entries
    knex('users_habits').insert({
      id: 1, 
      habit_id: 1,
      user_id: 1
    }),
    knex('users_habits').insert({
      id: 2, 
      habit_id: 2,
      user_id: 1
    }),
    knex('users_habits').insert({
      id: 3, 
      habit_id: 3,
      user_id: 1
    })
  );
};
