(function () {

angular
  .module('myApp')
  .config(config);

config.$inject = ['$routeProvider']

function config ($routeProvider) {
  console.log('hi');
  $routeProvider
    .when('/', {
      template: '<div app-home></div>'
    })
    .when('/habits', {
      template: '<div app-habit-list></div>'
      // controller: MyGeneralController
    });

  // $locationProvider.html5Mode(true);
}


})();