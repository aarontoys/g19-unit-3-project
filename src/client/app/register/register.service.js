(function () {

  angular
    .module('myApp')
    .service('registerDataService', registerDataService);

    registerDataService.$inject = ['$http'];

    function registerDataService ($http) {

      return {
        addUser: function (user) {
          console.log('registerDataService: user: ', user);
          return $http.post('/register', {
            email: user.email,
            pword: user.pword
          })
          .then(function(res) {
            console.log('line 19: ', res);
            return res;
          })
          .catch(function(err) {
            console.log('err line23: ', err);
            return err;
          });
        },
        findOne: function(email) {
          return $http.get('users')
          .then(function(res) {
            return res;
          })
          .catch(function(err) {
            return err;
          })
        }
      }
    }
})();