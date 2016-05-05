var knex = require('./knex');

var getAllHabits = function() { 
  return knex('habits');
};


module.exports = {
    // getUserHabits: function() {
    //   return userHabits();  
    // }
    getAllHabits: getAllHabits
}