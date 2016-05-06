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

    habitListCtrl.$inject = ['$uibModal', 'habitListDataService'];

    function habitListCtrl ($uibModal, habitListDataService) {
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

      vm.addItem = function () {
        console.log('the button was clicked');
        // return addHabit();
        $uibModal.open({
          templateUrl: 'app/habitList/habitList.newHabit.view.html',
          controller: uibModalCtrl,
          controllerAs: 'modal'
        })
      }

      uibModalCtrl.$inject = ['$uibModalInstance'];

      function uibModalCtrl ($uibModalInstance) {
        var modal = this;

        modal.cancelForm = function () {
          console.log('cancelForm');
          $uibModalInstance.dismiss('cancel');
        }

        modal.submitForm = function () {
          console.log('submitForm');
          addHabit();
          $uibModalInstance.close();
        }
        
      }

    }
})();