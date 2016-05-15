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

function registerCtrl () {
  var vm = this;

  vm.showReg = true;
  console.log('showReg', vm.showReg);
}
})();