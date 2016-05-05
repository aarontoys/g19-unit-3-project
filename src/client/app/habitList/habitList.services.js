(function () {

  angular
    .module('myApp')
    .service('habitListDataService', habitListDataService);

  habitListDataService.$inject = ['$http'];

  function habitListDataService ($http) {
    return {
      getAllHabits: function () {
        return $http.get('/lists')
          .then(function(res) {
            console.log(res);
            return(res);
          })
          .catch(function(err) {
            console.log('err: ',err)
            return err;
          })
      }
    }
  }

})();