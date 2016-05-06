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
      addHabit: function () {
        return $http.post('/habits', {
          habit: 'Test new habit'
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