var knex = require('./knex');

var getAllHabits = function () { 
  return knex('habits');
};

var addHabit = function (habit, description, interval, period, parent_habit_id, category_id) {
  return knex('habits').insert({
    habit: habit,
    description: description,
    interval: interval,
    period: period,
    parent_habit_id: parent_habit_id,
    category_id: category_id
  })
}


module.exports = {
    // getUserHabits: function() {
    //   return userHabits();  
    // }
    getAllHabits: getAllHabits,
    addHabit: addHabit
}