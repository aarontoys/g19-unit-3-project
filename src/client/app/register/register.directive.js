(function () {

angular
  .module('myApp')
  .directive('appRegister', register);

  function register () {
    return {
      restrict: 'EA',
      templateUrl: 'app/register/register.view.html',
      controller: registerCtrl,
      controllerAs: 'vm',
    }
  }

  registerCtrl.$inject = ['registerDataService', 'authService', '$location'];

  function registerCtrl (registerDataService , authService, $location) {
    var vm = this;

    vm.showReg = true;
    console.log('showReg', vm.showReg);

    vm.addNewUser = function () {
      console.log('register clicked');
      addUser(vm);
    }

    function addUser (user) {
      console.log('about to add: ', user);
      registerDataService.addUser(user)
      .then(function(result) {
        console.log('user added!', result)
        authService.setUserInfo(result);
        $location.path('/habits')
      })
      .catch(function(err) {
        console.log('user not added!');
        return err;
      });
    }
  }

})();
