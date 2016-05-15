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

      function addHabit (modalData) {
        habitListDataService.addHabit(modalData)
          .then(function(result) {
            debugger
            console.log('directive line34')
            console.log('result: ', result.data.id[0]);
            if (modalData.subHabit) {
              console.log('subHabit checked');
              vm.addItem();
            } else {
              habitListDataService.resetInsertArr();
            }
            getHabits();
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

      uibModalCtrl.$inject = ['$uibModalInstance', 'habitListDataService'];

      function uibModalCtrl ($uibModalInstance, habitListDataService) {
        var modal = this;

        modal.parent_habit_id = habitListDataService.getParentHabitId();

        console.log('parent id:',modal.parent_habit_id);

        if (modal.parent_habit_id) {
          getSingleHabit(modal.parent_habit_id);
        }

        function getSingleHabit (id) {
          habitListDataService.getSingleHabit(id)
            .then(function(result) {
              console.log('line64: ', result);
              modal.parent_habit = result.data.data[0].habit

            })
        }

        modal.cancelForm = function () {
          console.log('cancelForm');
          $uibModalInstance.dismiss('cancel');
        }

        modal.submitForm = function () {
          debugger;
          console.log('submitForm');
          console.log('modal obj:', modal);
          addHabit(modal);
          // getHabits();
          $uibModalInstance.close();
        }
        
      }

    }
})();