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

      function addHabit () {
        habitListDataService.addHabit()
          .then(function() {
            console.log('directive line34')
          });
      }

      this.addItem = function () {
        console.log('the button was clicked');
        return addHabit();
      }
    }
})();