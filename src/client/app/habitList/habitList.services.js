(function () {

  angular
    .module('myApp')
    .service('habitListDataService', habitListDataService);

  habitListDataService.$inject = ['$http'];

  function habitListDataService ($http) {
    return {
      getAllHabits: function () {
        return $http.get('/habits')
          .then(function(res) {
            console.log(res);
            return res;
          })
          .catch(function(err) {
            console.log('err: ',err)
            return err;
          })
      },
      addHabit: function (newHabit) {
          console.log('this should be the data from the modal: ', newHabit);
        return $http.post('/habits', {
          habit: newHabit.habit,
          description: newHabit.description,
          interval: newHabit.interval,
          period: newHabit.period
        })
          .then(function(res) {
            console.log('succes', res);
            return res;
          })
          .catch(function(err) {
            console.log('err line28: ', err);
            return err;
          });
      }
    }
  }

})();