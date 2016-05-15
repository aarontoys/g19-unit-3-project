(function () {

angular
  .module('myApp')
  .directive('appHome', homePage);


function homePage () {
  return {
    restrict: 'EA',
    templateUrl: 'app/homepage/home.view.html'
  }
}

})();