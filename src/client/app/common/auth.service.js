(function () {

  angular
    .module('myApp')
    .service('authService', authService);

    authService.$inject = ['$window'];

    function authService ($window) {
      return {
        setUserInfo: function(userData) {
          $window.localStorage.setItem('user', JSON.stringify(userData.data.data.id[0]));
          $window.localStorage.setItem('token', JSON.stringify(userData.data.data.token));
        },
        getUserInfo: function(userData) {
          $window.localStorage.getItem('user');
        },
      }
    }

})();