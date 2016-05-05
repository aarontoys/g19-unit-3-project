(function () {

  angular
    .module('myApp')
    .directive('appHabitList', habitList)

    function habitList () {
      return {
        restrict: 'EA',
        templateUrl: 'app/habitList/habitList.view.html',
        controller: habitListCtrl,
        controllerAs: 'vm'
      }
    }

    habitListCtrl.$inject = ['habitListDataService'];

    function habitListCtrl (habitListDataService) {
      var vm = this;

      getHabits();

      function getHabits () {
        habitListDataService.getAllHabits()
          .then(function(habits) {
            console.log(habits);
            vm.habits = habits.data.data
          })
      }
    }
})();