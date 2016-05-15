(function () {

angular
  .module('myApp')
  .directive('appNav', nav);

function nav () {
  return {
    restrict: 'EA',
    templateUrl: 'app/nav/nav.view.html'
  }
}

})();