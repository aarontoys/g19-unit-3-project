(function () {

angular
  .module('myApp')
  .directive('appFooter', footer);

function footer () {
  return {
    restrict: 'EA',
    templateUrl: 'app/footer/footer.view.html'
  }
}

})();